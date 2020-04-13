// Модуль позволяет получить некоторую информацию об ОС в которой мы находимся.
const os = require('os')

console.log('Operation system:', os.platform())
console.log('Processor architecture:', os.arch())
console.log('Processor info:', os.cpus())
console.log('Free memory:', os.freemem())
console.log('Total memory:', os.totalmem())
console.log('Home directory:', os.homedir())
console.log('Computer uptime:', os.uptime())