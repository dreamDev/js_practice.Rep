const myFN = async () => {
  return await Promise.resolve('async is working with babel')
}

myFN()
  .then(console.log)

class Util {
  // Данный синтаксис пока что не стандарт языка, а только proposal, то есть экспирементальный, поэтому что бы он корректно работал необходимо установить плагин для babel: @babel/plugin-proposal-class-properties
  // В противном случае получим ошибку.
  static id = Date.now()
}

console.log('Util ID:', Util.id)