// Модуль path используется для обработки и преобразования путей к файлам.
const path = require('path')

console.log('fileName:', path.basename(__filename))
console.log('dirName:', path.dirname(__filename))
console.log('extensionName', path.extname(__filename))
console.log('Parse', path.parse(__filename))
console.log(path.join(__dirname, 'server', 'index.html'))

console.log(__filename)