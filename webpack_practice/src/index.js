// Импорт библиотеки jQuery.
import * as $ from 'jquery'
// Так как webpack по умолчанию понимает 2 default extwnsions: .js и .json.
// То мы можем не указывать расширения таких файлов в путях.
// Исправляем путь из относительного в абсолютный, так как указали поле alias в конфиге.
import Post from '@models/Post'
// webpack подгрузит json файл, спарсит его через JSON.parse() и мы сразу сможем работать с ним как с объектом. То есть webpack берет и как бы вшивает json в наш javascript, это как раз то, что делают лоадеры.
import json from './assets/json'
// Для того, что бы webpack мог работать с картинками, необходимо установить лоадер: file-loader.
import WebpackLogo from '@/assets/logo'
// Для работы с xml используем xml-loader.
import xml from './assets/data.xml'
// Для работы с babel в webpack необходимо установить сам babel и лоадер для него: npm i -D babel-loader @babel/core.
// Так же необходимо установить пресет для babel, по стандарту это - npm i -D @babel/preset-env.
// Для того, что бы использовать функционал async/await необходимо подключить полифилы: npm i --save @babel/polyfill. Но полифил мы должны подключать как отдельную библиотеку в entry:{main:['@babel/polyfill', 'entry-point.js']}.
import './babel'
// Для работы с css стилями устанавливаем style-loader, css-loader.
import './styles/style.css'
// Для того что бы использовать препроцессор для стилей, нужно не только установить и указать лоадеры, но и установить сам препроцессор, в данном случае less.
import './styles/less.less'
// Для работы с sass/scss устанавливаем node-sass и sass-loader.
// node-sass содержит в себе корневой функционал, который относится к sass и scss. sass-loader - соответственно лоадер для webpack.
import './styles/scss.scss'


const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').html(post.toString())

console.log('JSON:', json)
console.log('XML:', xml)