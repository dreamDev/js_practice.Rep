// ES6

/* Spread(расширение) и Rest(остаточные параметры) операторы 

Когда мы видим "..." в коде, это могут быть как spread, так и rest операторы.

Как отличить их друг от друга:

Если ... располагается в конце списка аргументов функции, то это «остаточные параметры». Он собирает остальные неуказанные аргументы и делает из них массив.
Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива.
Полезно запомнить:

Остаточные параметры используются, чтобы создавать новые функции с неопределённым числом аргументов.
С помощью оператора расширения можно вставить массив в функцию, которая по умолчанию работает с обычным списком аргументов.
Вместе эти конструкции помогают легко преобразовывать наборы значений в массивы и обратно.

*/

//*****************************************************//
/* Spread оператор */

(function () {

  // Example 1: Arrays

  const array1 = [1, 2, 3, 4];
  const array2 = [5, 6, 7, 8];

  // Реализация склеивания двух массивов в один на es5.
  const merge1 = [].concat(array1, array2);
  // const merge1 = array1.concat(array2); -- Данная запись делает то же самое, что и запись выше, так как метож concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
  console.log(merge1); //  [1, 2, 3, 4, 5, 6, 7, 8]

  // Реализация склеивания двух массивов в один на es6 с помощью Spread оператора.
  const merge2 = [...array1, ...array2];
  console.log(merge2); //  [1, 2, 3, 4, 5, 6, 7, 8]

  // Example 2: Objects

  const user = {
    name: 'Tom',
    age: 22,
    difficult: 'easy'
  }

  const job = {
    pos: 'Frontend',
    level: 'Middle',
    difficult: 'hard'
  }

  // Метод копирования через Object.assign на es5
  // Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
  // Необходимо учитывать, что свойства с одинаковыми ключами перетерираются свойствами из последующих объектов в списке аргументов, как например свойство difficult.
  const person = Object.assign(user, job); // {name: "Tom", age: 22, difficult: "hard", pos: "Frontend", level: "Middle"}
  console.log(person);

  // Метод копирования через Spread на es6.
  // В этой реализации свойства с одинаковым именем также перетираются как и в предыдущем примере с Object assign().
  const secondPerson = {
    ...user,
    ...job
  }
  console.log(secondPerson); // {name: "Tom", age: 22, difficult: "hard", pos: "Frontend", level: "Middle"}

  // Example 3: Functions

  const array3 = [1, 2, 3];

  function sum(a, b, c) {
    return a + b + c;
  }

  // Реализация на es5.
  console.log(sum(array3[0], array3[1], array3[2])); // 6
  console.log(sum.apply(null, array3)); // 6

  // Реализация на es6 с помощью Spread оператора.
  console.log(sum(...array3)); // 6

})();

//*****************************************************//

//*****************************************************//
/* Rest оператор */

(function () {

  function res(arg1, arg2, ...rest) {
    // Видим, что Rest оператор свернул лишние аргументы в массив. При чем это настоящий Array, а не псевдомассив как arguments, поэтому мы свободно можем применять к нему встроенные методы массивов.
    console.log(arg1, arg2, rest); // 1 2 [3, 4, 5, 6, 7]

    // Применяем метод multBy, который мы создали в модуле es5 и присвоили его Array.ptototype. Так что он теперь наследуется всеми нашими массивами в документе.
    let multRest = rest.multBy(2);
    console.log(rest); // [3, 4, 5, 6, 7]
    console.log(multRest); // [6, 8, 10, 12, 14]
  }

  // Передаем в функцию больше двух ожидаемых(arg1 и arg2) аргуметов.
  res(1, 2, 3, 4, 5, 6, 7);

})();

//*****************************************************//


/* Стрелочные => функции 

Следует отметить, что стрелочные функции, это всегда function expression.

Так же со стрелочными функциями нельзя применять методы bind(), apply(), call().

Стрелочные функции не содержат собственный контекст this, а используют значение this окружающего контекста.

Стрелочные функции нельзя использовать, как конструкторы объектов, то есть с ними нельзя использовать оператор new.

Так же в стрелочных функциях нет псевдомассива arguments.

Выражение стрелочных функций не позволяют задавать имя, поэтому стрелочные функции анонимны, если их ни к чему не присвоить.

*/

//*****************************************************//

(function () {

  // Example 1: default arguments

  function greet(name, age) {

    // es5 реализация присваивания дефолтных значений переменным, если при вызове функции мы не передадим какое то значение.
    var name = name || "Tom";
    return `Hello ${name}, your age is ${age}!`;
  }

  console.log(greet('', 25)); // Hello Tom, your age is 25!

  // es6 реализация присваивания дефолтных значений. Теперь нам не нужно создавать переменные с такими же именами в теле функции.
  function anotherGreet(name = 'Tom', age = 20) {
    return `Hello ${name}, your age is ${age}!`;
  }

  console.log(anotherGreet()); // Hello Tom, your age is 20!
  console.log(anotherGreet('Nina', 18)); // Hello Nina, your age is 18!

  // Example 2: arrow function syntax

  // Base syntax
  () => {};

  const arrowGreet = (name = 'Tom', age = 20) => `Hello ${name}, your age is ${age}!`;

  console.log(arrowGreet()); // Hello Tom, your age is 20!

  // Example 3: cases of syntax

  // 1) Using name:
    const FUNC = () => {};

  // 2) Default syntax:
    (a,b) => {
      let sum = a + b;
      return sum;
    };
  
  // 3) One argument:
    // Имея дело с одним параметром, мы можем как обернуть его в скобки (a), так и опустить их, как в примере ниже.
    a => {
      let sum = a + 1;
      return sum;
    };

  // 4) No arguments:
    () => {
      let sum = a + b;
      return sum;
    };

  // 5) If one line, don't need 'return':
    a => a * 2;
    (a,b) => a * b;

  // 6) Object literal
    // Если тело функции занимает одну строку и мы хотим вернуть литерал объекта, то его нужно обернуть в круглые скобки, как в примере ниже. Если же тело функции занимает несколько строк и мы используем фигурные скобки, то оборачивать литерал объекта в круглые скобки не нужно.
    () => ({name: 'Kobe', age: 10});

  // 7) IIFE (Immediately Invoked Function Expression):
    (() => {})();

  // Example 4: Context:

  // Потеря this и решение проблемы с помощью замыкания es5.
  let person = {
    userName: 'Jack',
    greet: function () {
      setTimeout(function () {
        console.log(this.userName, this);
      }, 2000);
    }
  };

  person.greet(); // this.userName = undefined, this = Window {...}

  // Решение потери this с помошью замыкания.
  let anotherPerson = {
    userName: 'Jack',
    greet: function () {
      let _this = this;
      setTimeout(function () {
        console.log(_this.userName, _this, this);
      }, 2000);
    }
  };

  anotherPerson.greet(); // _this.userName = 'Jack', _this = anotherPerson {...}, this = Window {...}

  // Решение потери this с помощью стрелочной функции в setTimeout. И так как у нее нет собственного this, она берет его из окружающего контекста, коим является объект thirdPerson.
  let thirdPerson = {
    userName: 'Jack',
    greet: function () {
      setTimeout(() => console.log(this.userName, this), 2000);
    }
  }

  console.log(thirdPerson.greet()); // this.userName = 'Jack', this = thirdPerson {...}

})();

//*****************************************************//


/* Цикл for...of  

Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

Различия между for...of и for...in:

1) Оба оператора, и for...in и for...of производят обход объектов . Разница в том как они это делают.
2) Для for...in обход перечисляемых свойств объекта осуществляется в произвольном порядке.
3) Для for...of обход происходит в соответствии с тем, какой порядок определен в итерируемом объекте.

*/

//*****************************************************//

(function () {

  // Цикл for...of перебирает значения итерируемой сущности. 

  const names = ['Tomas', 'Jhonny', 'Steve', 'Kobe', 'Ludvig'];

  // Цикл for...in стандарта es5 вместо значения будет выводить его порядковый номер, то есть индекс.
  for(let index in names) {
    // Данным условием мы не позволяем циклу вывести наследуемые свойства, так как цикл for...in пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа). Это означает, что без данной проверки, цикл так же выведет созданный нами раннее метод multBy().
    if (names.hasOwnProperty(index))

    console.log(index); // 0 1 2 3 4
  }

  // Решение проблемы на es5
  for(let index in names) {
    // Данным условием мы не позволяем циклу вывести наследуемые свойства, так как цикл for...in пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа). Это означает, что без данной проверки, цикл так же выведет созданный нами раннее метод multBy().
    if (names.hasOwnProperty(index))

    console.log(names[index]); // Tomas Jhonny Steve Kobe Ludvig
  }

  // Выводим значения массива новым циклом es6 for...of. В данном случае нам не нужна проверка, как в примере выше.
  for(let name of names) {
    console.log(name); // Tomas Jhonny Steve Kobe Ludvig
  }

  /* Следующий пример показывает различия в работе циклов for...of и for...in при обходе Array.

  Object.prototype.objCustom = function() {};
  Array.prototype.arrCustom = function() {};

  let iterable = [3, 5, 7];
  iterable.foo = 'hello';

  for (let i in iterable) {
    console.log(i); // выведет 0, 1, 2, "foo", "arrCustom", "objCustom"
  }

  for (let i in iterable) {
    if (iterable.hasOwnProperty(i)) {
      console.log(i); // выведет 0, 1, 2, "foo"
    }
  }

  for (let i of iterable) {
    console.log(i); // выведет 3, 5, 7
  } 
  
  */

})();

//*****************************************************//
