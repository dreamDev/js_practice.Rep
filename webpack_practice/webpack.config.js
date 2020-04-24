const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

// Данная переменная позволяет нам определить, в каком режиме сборки мы находимся: production || development.
// Далее нам необходимо в зависимости от сборки правильно задать данную переменную, и в зависимости от ОС она задается по разному, поэтому будет лучше воспользоваться пакетом cross-env.
// cross-env определяет в какой ОС вы находитесь и самостоятельно задает системные переменные. Так же необходимо подкорректировать .json файл.
const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log('IS DEV:', isDev)

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    // В данном поле мы переписываем базовые оптимизаторы, которые есть в webpack на наши существующие.
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // hot module replacement означает, что мы можем изменять определенные сущности без перезагрузки страницы. hmr добавляется в том случае, если это возможно.
        // Но нам нужно определять, что hmr следует добавлять только в том случае, если мы находимся в development режиме. Для этого создадим переменную isDev. 
        hmr: isDev,
        reloadAll: true
      }
    },
    'css-loader',
  ]

  if (extra) loaders.push(extra)

  return loaders
}

// Экспортируем объект, который является объектом конфигурации для webpack.
module.exports = {
  // Строка, которая указывает, где лежат все исходники нашего приложения.
  // После указания папки с исходниками, в других путях не нужно указывать /src так как webpack теперь отталкивается от самой src папки.
  context: path.resolve(__dirname, 'src'),
  // В поле mode мы можем указать в каком виде собирать файлы в bundle.js.
  // По умолчанию это поле стоит в production.
  mode: 'development',
  // В поле entry указываем в строковом формате тот файл, который является входным для нашего приложения.
  // Это поле также может содержать несколько входных точек.
  entry: {
    // Так как мы используем babel, то в данном поле вместо строки('./index.js') задаем массив и указываем, что когда мы собираем main, мы так же должны пользоваться babel полифилом.
    main: ['@babel/polyfill', './index.js'],
    analytics: './analytics.js'
  },
  // Далее необходимо указать, куда складывать результат работы webpack.
  output: {
    // Указываем паттерн [name] перед bundle.js, что бы не было конфликта чанков main и analytics.
    // Так же после имени, можем указать паттерн [contenthash], для добавление к имени хэша по контенту. Либо просто [hash].
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // В ключе extensions мы говорим webpack'у, какие расширения понимать по умолчанию.
    // То есть, указанные в массиве расширения не нужно будет прописывать в путях к файлам например при импорте.
    extensions: ['.js', '.json', '.png'],
    // Ключ alias содержит строку(и), которая указывает на корень приложения.
    // В пиложении с большой вложенностью и иерархией это удобный способ избежать написания длинных путей, например '../../../../models/main.js'.
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // По умолчанию, если мы будем импортировать одну и ту же js библиотеку в разные entry points, то webpack добавит ее в каждый entry point, в итоге это будет занимать слишком много места.
  // В данном поле мы указали, что если, одну и туже библиотеку импортируют в разные entry points, то webpack вынесет эту библиотеку(общий код) в одельный vendor file, и получится, что эту библиотеку(код) на продакшене мы загрузим только один раз.
  optimization: optimization(),
  devServer: {
    port: 4000,
    // Аналог hmr, только в данном случае называется hot.
    hot: isDev
  },
  // devtool это ключ в конфигурации webpack, где мы можем указать, какие исходные карты(source-map) нам потребуются для работы.
  devtool: isDev ? 'source-map' : '',
  plugins: [
    // Плагин, который автоматически вставляет .js файлы в наш html.
    new HTMLWebpackPlugin({
      // Путь до нашего html файла.
      template: './index.html',
      // Минифицировать html в production сборке.
      minify: {
        collapseWhitespace: isProd
      }
    }),
    // Плагин, который будет перезаписывать файлы в папке dist во время сборки. То есть он сначала ее очистит, а затем добавит туда новые файлы.
    // Без данного плагина, при сборке, файлы в папку dist будут просто добавляться, а старые файлы удаляться не будут.
    new CleanWebpackPlugin(),
    // Плагин, который переносит определенные статические(например картинки) файлы откуда нам нужно, куда нам нужно.
    new CopyWebpackPlugin([
      // Для каджого копируемого элемента мы должны указать объект.
      // Копируемым элементом может быть отдельный файл или целая папка.
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  // webpack понимает только расширения .js и .JSON, он не может напрямую работать с другими типами файлов.
  // Лоадеры это возможность добавления к webpack функционала, который позволяет работать с другими типами файлов, например с css.
  module: {
    // В массиве rules мы указываем объекты, которые будут описывать определенный тип лоадера.
    rules: [
      {
        // В поле test нужно указать RegExp.
        // В этом поле мы по сути говорим webpack, что если файлы, соответствующие своим расширением данному паттерну попадаются ему в качестве import, то тогда ему нужно использовать различные типы лоадеров, указанные в поле 'use'.
        test: /\.css$/,
        // css-loader непосредственно обрабатывает css, а style-loader добавляет полученные стили в head html.
        // Что бы вынести css в отдельный файл, мы можем воспользоваться плагином MiniCssExtractPlugin.
        // Это не только плагин, но еще и класс, предоставляющий нам возможность добавить loader.
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        // Лоадеры в webpack читаются справа налево или, как в данном случае, снизу вверх.
        // Поэтому сначала прогоняем через less-loader, затем css-loader, затем MiniCssExtractPlugin.loader.
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpeg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        } 
      }
    ]
  }
}