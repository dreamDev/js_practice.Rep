// File system. Модуль для работы с файлами
const fs = require('fs'),
  path = require('path')

// Используем асинхронный вариант
// При работе с какими либо асинхронными операциями в nodeJS, то всегда первым параметром в callback функции должна быть ошибка(err).

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) throw err
//   console.log('folder created!')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// При повторном вызове метода, созданный ранее файл перезапишется новым и весь существующий контент прошлого файла перетрется контентом нового.

// fs.writeFile(filePath, 'Hello nodeJS', err => {
//   if (err) throw err
//   console.log('file created!')
  // Метод добавляет контент к уже существующему без перезаписи.
//   fs.appendFile(filePath, '\nHello nodeJS again!', err => {
//     if (err) throw err
//     console.log('file created!')

//   })
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) throw err
  console.log(content)

  // const data = Buffer.from(content)
  // console.log('Content:', data.toString())
})