// Итератор - это паттерн, идея которого заключается в том, что мы создаем какй то объект/класс, с помощью которого мы сможем последовательно получать доступ к информации используя разные алгоритмы перебора коллекции/дерева..

class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0,
          };
        }
      },
    };
  }
}

function* generator(collection) {
  let index = 0;
  while (index < collection.length) {
    yield collection[index++];
  }
}

const iterator = new MyIterator(["This", "is", "iterator"]);
const gen = generator(["This", "is", "iterator"]);

for (const val of iterator) {
  console.log("value:", val);
}

// for (const val of gen) {
//   console.log('value:', val)
// }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



class Iterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const autos = {
  audi: {model: 'Audi', color: 'black', price: 2000},
  bmw: {model: 'BMW', color: 'black', price: 3000},
  ferrari: {model: 'Ferrari', color: 'red', price: 5000}
}

const collection = new Iterator(autos)

while (collection.hasNext()) {
  console.log(collection.next())
}