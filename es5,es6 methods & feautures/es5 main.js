// ES5

/* Методы перебирающие массив

-- forEach() --
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве. 
Метод forEach() не возвращает никакого значения, при попытке вернуть значение из метода, получим undefined.

-- map() --
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. 
Метод map() может возвращать результат своей работы.

-- filter() --
Метод filter() создаёт и возвращает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
Передаваемая функция, должна быть функцией-предикатом, то есть возвращать true или false.
Если ни один элемент не пройдёт тест, то будет возвращён пустой массив.

-- some(), every() --
Метод some() проверяет, удовлетворяет ли КАКОЙ-ЛИБО элемент массива условию, заданному в передаваемой функции.
Метод some() возвращает true, если функция проверки возвращает truthy значение хотя бы для ОДНОГО элемента массива. Иначе, false.

Метод every() проверяет, удовлетворяют ли ВСЕ элементы массива условию, заданному в передаваемой функции.
Метод every() возвращает true, если функция проверки возвращает truthy значение для КАЖДОГО элемента массива. Иначе, false. 

-- reduce(), reduceRight() --
Методы reduce() и reduceRight() служат для свертки массива, применяя callback функцию к каждому элементу массива, сохраняя при этом промежуточный результат.
Кроме callback функции, методам можно передать начальное значение(initialValue), а callback функция принимает не 3, а 4 параметра.

Метод reduce() применяет callback функцию к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

Метод reduceRight() применяет callback функцию к каждому элементу массива (справа-налево), возвращая одно результирующее значение.

-- find(), findIndex() -- 

Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.

Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.


--------------------------------------------------------

Ни один из этих методов не изменяет исходный массив.
Каждый из методов принимает callback функцию.
В свою очередь, callback функция принимает 3 аргумента:
element - элемент массива,
index - индекс элемента,
array - сам массив.

-- Base function
-- array.method(callback function(element, index, array) {});

*/


//*****************************************************//
/* forEach() */

(function () {

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var newArray = [];
  var counter = 0;

  array.forEach(function (element) {
    newArray.push(element *= element);
  })

  array.forEach(function (element) {
    counter += element;
  })

  var response = [{ index: 0, name: "Tom", gender: "male", age: 20, isActive: true },
  { index: 1, name: "Robert", gender: "male", age: 22, isActive: false },
  { index: 2, name: "Nina", gender: "female", age: 17, isActive: true },
  { index: 3, name: "Korben", gender: "male", age: 32, isActive: false },
  { index: 4, name: "Angela", gender: "female", age: 27, isActive: false }];

  var namesArray = [];

  var getNames = function (element) {
    namesArray.push(element.name)
  };

  response.forEach(getNames)

  console.log(newArray); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  console.log(counter); // 55
  console.log(namesArray); // ["Tom", "Robert", "Nina", "Korben"]

})();

//*****************************************************//

//*****************************************************//
/* map() */

(function () {

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var newArray = [];

  newArray = array.map(function (element) {
    return element *= element;
  });

  var response = [{ index: 0, name: "Tom", gender: "male", age: 20, isActive: true },
  { index: 1, name: "Robert", gender: "female", age: 22, isActive: false },
  { index: 2, name: "Nina", gender: "female", age: 17, isActive: true },
  { index: 3, name: "Korben", gender: "male", age: 32, isActive: false },
  { index: 4, name: "Angela", gender: "female", age: 27, isActive: false }];

  var responseData = [];

  responseData = response.map(function (element) {
    return {
      name: element.name,
      gender: element.gender
    }
  });

  console.log(newArray); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  console.log(responseData); // [{…}, {…}, {…}, {…}, {…}]

})();

//*****************************************************//

//*****************************************************//
/* filter() */

(function () {

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -15];
  var newArray = [];

  newArray = array.filter(function (element) {
    return element % 2 === 1 && element > 0;
  })

  var response = [{ index: 0, name: "Tom", gender: "male", age: 20, isActive: true },
  { index: 1, name: "Robert", gender: "female", age: 22, isActive: false },
  { index: 2, name: "Nina", gender: "female", age: 17, isActive: true },
  { index: 3, name: "Korben", gender: "male", age: 32, isActive: false },
  { index: 4, name: "Angela", gender: "female", age: 27, isActive: false }];

  var userIsActive = [];
  var userHighestAges = [];

  userIsActive = response.filter(function (element) {
    return element.isActive;
  });

  userHighestAges = response.filter(function (element) {
    return element.age > 20;
  });

  console.log(newArray); // [1, 3, 5, 7, 9]
  console.log(userIsActive); // [{index: 0…}, {index: 2…}]
  console.log(userHighestAges); // [{index: 1…}, {index: 3…}, {index: 4…}]

})();

//*****************************************************//

//*****************************************************//
/* every(), some() */

(function () {

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -15];
  var someIsContains;
  var everyIsContains;

  someIsContains = array.some(function (element) {
    return element > 0;
  })

  everyIsContains = array.every(function (element) {
    return typeof element !== "number";
  });

  var response = [{ index: 0, name: "Tom", gender: "male", age: 20, isActive: true },
  { index: 1, name: "Robert", gender: "female", age: 22, isActive: false },
  { index: 2, name: "Nina", gender: "female", age: 17, isActive: true },
  { index: 3, name: "Korben", gender: "male", age: 32, isActive: false },
  { index: 4, name: "Angela", gender: "female", age: 27, isActive: false }];

  var someIsMale;
  var everyIsActive;

  someIsMale = response.some(function (element) {
    return element.gender == "male";
  });

  everyIsActive = response.every(function (element) {
    return element.isActive;
  });

  console.log(someIsContains); // true
  console.log(everyIsContains); // false
  console.log(someIsMale); // true
  console.log(everyIsActive); // false

})();

//*****************************************************//

//*****************************************************//
/* reduce(), reduceRight() */

(function () {

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -15];
  var flattened = [[0, 1], [2, 3], [4, 5]];
  var result, result2, result3, result4;

  // intervalResult - это промежуточный результат вычисления. 
  // При отсутствии initialValue, intervalResult будет равен первому элементу в массиве.
  result = array.reduce(function (intervalResult, element) {
    return intervalResult += element;
  });

  // 10 - это initialValue, теперь intervalResult равен initalValue, в данном случае числу 10.
  result2 = array.reduce(function (intervalResult, element) {
    return intervalResult += element;
  }, 10);

  // Разваорачиваем многомерный массив с помощью метода concat().
  result3 = flattened.reduce(function (intervalResult, element) {
    return intervalResult.concat(element);
  });

  var response = [{ index: 0, name: "Tom", gender: "male", age: 20, isActive: true },
  { index: 1, name: "Robert", gender: "female", age: 22, isActive: false },
  { index: 2, name: "Nina", gender: "female", age: 17, isActive: true },
  { index: 3, name: "Korben", gender: "male", age: 32, isActive: false },
  { index: 4, name: "Angela", gender: "female", age: 27, isActive: false }];

  // В данном случае, если мы не передадим initialValue(в виде массива []), будет ошибка, так как метод reduce() в качестве первого аргумента(intervalResult) ожидает получить массив, а получит объект.
  result4 = response.reduce(function (intervalResult, element) {
    return intervalResult.concat(element.name);
  }, []);

  console.log(result); // 39
  console.log(result2); // 49
  console.log(result3); // [0, 1, 2, 3, 4, 5]
  console.log(result4); // ["Tom", "Robert", "Nina", "Korben", "Angela"]

})();

//*****************************************************//
/* find(), findIndex() */

(function () {

  var response = [{ index: 0, name: "Tom", gender: "male", age: 20, isActive: true },
  { index: 1, name: "Robert", gender: "female", age: 22, isActive: false },
  { index: 2, name: "Nina", gender: "female", age: 17, isActive: true },
  { index: 3, name: "Korben", gender: "male", age: 32, isActive: false },
  { index: 4, name: "Angela", gender: "female", age: 27, isActive: false }];

  var korben = response.find(function (element) {
    return element.name === "Korben";
  });

  console.log(korben); // {index: 3, name: "Korben", gender: "male", age: 32, isActive: false}

  var korbenIndex = response.findIndex(function (element) {
    return element.name === "Korben";
  });

  console.log(korbenIndex); // 3

})();

//*****************************************************//


/* Псеводмассив arguments */

//*****************************************************//

(function () {

  // Преобразовываем псевдомассив с аргументами функции в стандартный массив разными методами
  function setAlphabet() {

    var arr = [];
    for (var i = 0; i < arguments.length; i++) {
      arr[i] = arguments[i];
    }

    var arr2 = [].slice.call(arguments);

    var arr3 = Array.prototype.slice.call(arguments);

    // Теперь у нас есть обычный массив с аргументами нашей функции из псевдомассива arguments и мы можем применять к этому массиву любые array.prototype методы.
    console.log(arr); // ["a", "b", "c", "d", "e"]
    console.log(arr2); // ["a", "b", "c", "d", "e"]
    console.log(arr3); // ["a", "b", "c", "d", "e"]

  }

  setAlphabet('a', 'b', 'c', 'd', 'e');

})();

//*****************************************************//


/* Методы, явно указывающие(привязывающие) контекст вызова.

-- call(), apply(), bind() -- 

Методы call() и apply() похожи по своей функциональности, и синтаксис этих методов практически полностью идентичен. Фундаментальное различие между ними заключается в том, что функция call() принимает СПИСОК аргументов, в то время, как функция apply() - одиночный МАССИВ аргументов.

Метод bind() создает обертку над функцией, которая подменяет контекст этой функции. Поведение метода похоже на call() и apply(), но в отличии от них, не вызывает функцию, а лишь возвращает обертку(новую функцию), которую можно вызвать позже.

-- Base function call() & bind()
-- func.call(thisArg, arg1, arg2, ...);

-- Base function apply()
-- func.apply(thisArg, [arg1, arg2, ...]);

*/

//*****************************************************//
/* call() */

(function () {

  var user = {
    firstName: 'Василий',
    lastName: 'Петров',
    patronymic: 'Иванович'
  }

  function showFullName(firstPart, lastPart) {
    console.log(this[firstPart] + " " + this[lastPart])
  }

  function doSomething() {
    var args = Array.prototype.slice.call(arguments)
    console.log(args)
  }

  showFullName.call(user, 'firstName', 'lastName'); // Василий Петров
  showFullName.call(user, 'firstName', 'patronymic'); // Василий Иванович

  doSomething('water', 'fire', 'earth', 'wind'); // ["water", "fire", "earth", "wind"]

})();

//*****************************************************//

//*****************************************************//
/* apply() */

(function () {

  var array = [1, 23, 57, 6, -23, 25];

  function sum1(a, b, c) {
    return a + b + c;
  }

  function sum2() {
    for (var i = 0, result = 0; i < arguments.length; result += arguments[i++]);
    return result;
  }

  // В метод apply() и call() первым аргументом передается объект который становится контекстом вызова функции. В данном случае этот объект не нужен, т.к. наша задача - это просто вызвать функцию sum с заданными аргументами, т.е. массивом. Ведь этот массив не внутри объекта, а просто "сам по себе". Поэтому контекст ему не нужен.
  console.log(sum1.apply(null, [1, 2, 3])); // 6
  console.log(sum2.apply(null, array)); // 89

})();

//*****************************************************//

//*****************************************************//
/* bind() */

(function () {

  var user = {
    userName: 'Jack',
    sayHi: function () {
      console.log('Hello ' + this.userName);
    }
  }

  // Привязываем методу user.sayHi контекст user, что бы не потерять this в методе sayHi во время вызова setTimeout, так как setTimeout не запоминает контекст выполнения. Мы так же можем решить проблему потери this с помощью замыкания.
  setTimeout(user.sayHi.bind(user), 1000); // Hello Jack

  var users = {
    data: [
      { name: 'Tom' },
      { name: 'Jade' },
      { name: 'Nina' },
    ],
    showSecond: function (event) {
      console.log(this.data[1].name)
    }
  }

  document.addEventListener('DOMContentLoaded', users.showSecond.bind(users)); // Jade

})();

//*****************************************************//


/* Частичное применение функций с помощью bind() 

С помощью метода bind() мы создаем обертку над функцией, которая фиксирует контекст выполнения, но так же, с помощью данного метода, мы можем зафиксировать и аргументы функции.

*/

//*****************************************************//

(function () {

  function greet(gender, age, name) {

    var greeting = gender === 'male' ? 'Mr. ' : 'Ms. ';

    if (age > 25) return 'Hello, ' + greeting + name + '.';
    else return 'Hey, ' + name + '.';
  }

  // Создаем новую функцию и фиксируем в ней первые 2 аргументы с помощью метода bind().
  // Первым аргументом в метод bind() передаем null, так как в данном контексте мы не нуждаемся в объекте, соответственно использоваться он не будет.
  var greetAnAdultMale = greet.bind(null, 'male', 45);
  var greetAYoungWoman = greet.bind(null, 'female', 28);

  console.log(greetAnAdultMale('John Petrucci')); // Hello, Mr. John Petrucci.
  console.log(greetAYoungWoman('Sara Brightman')); // Hello, Ms. Sara Brightman.

})();

//*****************************************************//


/* Closures, замыкания */

//*****************************************************//

(function(){

  // Example 1:

  // Предположим мы имеем 10 кнопок
  // В данном примере мы ожидаем, что цикл пробежит по всем кнопкам, запишет в HTML ее порядковый номер, и затем, когда мы будем кликать по ней, будет выводиться порядковый номер.
  // Но вопреки ожиданиям, каждая кнопка будет выводить число 10, так как значение i в handler функции, при клике, будет браться из global scope, потому что цикл и переменная var i находится в глобальной области видимости, и когда цикл закончится, переменная i будет сохранена в global scope со значением 10.

  // for (var i = 0; i < buttons.length; i++) {
  //   buttons[i].innerHTML = i;
  //   buttons[i].onclick = function() {
  //     console.log(i)
  //   }
  // }

  // Решение проблемы через замыкание.
  // В данном примере, мы создаем внутри handler функции другую функцию, которая возьмет значение i из своего внешнего scope(т.е. из handler функции).
  // А функцию handler, мы будем вызывать на каждой итерации и передавать в нее ТЕКУЩЕЕ значение i, тем самым сохраняя значение i в local scope handler функции.
  // И теперь, при клике на кнопку, будет выводиться именно ее порядковый номер, так как при клике будет срабатывать внутренняя функция в лексическом окружении которой, будет храниться значение i.

  // for (var i = 0; i < buttons.length; i++) {
  //   buttons[i].innerHTML = i;
  //   buttons[i].onclick = function(currentValue) {
  //     return function() {
  //       console.log(currentValue)
  //     }
  //   }(i);
  // }

  // Аналогичный пример
  // Ожидаем что вызов функции во втором цикле будет выводить порядковый номер i, но получяем цифру 3 на каждой итерации.
  // Это происходит все по той же причине, анонимая функция берет значение i из global scope, в котором i = 3.

  // var funcs = [];
  // for (var i = 0; i < 3; i++) {
  //   funcs[i] = function () {
  //     console.log("i value is " + i);
  //   };
  // }

  // for (var j = 0; j < 3; j++) {
  //   funcs[j]();
  // }

  // Аналогичное решение проблемы через замыкание

  // var funcs = [];
  // for (var i = 0; i < 3; i++) {
  //   funcs[i] = (function(value) {
  //     console.log("i value is " + value);
  //   })(i);
  // }

  // for (var j = 0; j < 3; j++) {
  //   funcs[j]();
  // }

})();

(function () {

  // Example 2:

  var person1 = { name: 'Darrel', age: 22, job: 'Frontend' };
  var person2 = { name: 'Kevin', age: 27, job: 'Backend' };

  function logPersonAndSummArgs() {

    // Преобразовавыем псевдомассив arguments в массив с помощью метода Array.from()
    var args = Array.from(arguments);
    var result = args.reduce(function (intervalResult, element) {
      return intervalResult += element;
    });

    console.log(`Person: ${this.name}, ${this.age}, ${this.job}, Result: ${result}`);
  }

  function bind(context, fn) {
    return function () {
      fn.apply(context, arguments);
    }
  }

  bind(person1, logPersonAndSummArgs)(1, 5, 4); // Person: Darrel, 22, Frontend, Result: 10
  bind(person2, logPersonAndSummArgs)(23, 34, 1); // Person: Kevin, 27, Backend, Result: 58

})();

//*****************************************************//


/* Прототипное наследование 

Приведенный ниже метод удобен тем, что нам не нужно будет импортировать функцию при использовании модулей.
Вместо этого, мы можем сразу применить созданный нами метод непосредственно к любому массиву(так как в данном случае мы написали метод для глобального класса Array), так как этот метод будет наследоваться всеми массивами.

*/

//*****************************************************//

(function () {

  var devArray = [1, 2, 3, 4, 5];

  // Теперь прототип глобального объекта Array имеет метод multBy, это значит, что теперь к любому созданному нами массиву(в любом контексте, в глобальном в том числе) мы можем применить метод multBy.
  Array.prototype.multBy = function (n) {
    return this.map(function (element) {
      return element *= n;
    })
  };

  console.log(devArray.multBy(5)); // [5, 10, 15, 20, 25]

})();

//*****************************************************//


/* Измерение производительности блоков кода 

Используйте console.time() для измерения производетельности отдельных блоков кода.

В качестве параметра в функции console.time() и console.timeEnd() передаётся строка — имя, которое будет использовано обеими функциями в качестве сигнала для начала и окончания времени измерений.

*/

//*****************************************************//

(function () {
  
  console.time('Tested Array');
  var arr = [];
  for (var i = 0; i < 1000; i++) {
    arr.push({ i: i });
  }
  console.timeEnd('Tested Array'); // Tested Array: 0.365966796875ms

})();

//*****************************************************//


/* local storage 

Необходимо помнить, что local storage может работать только со String типом данных.

LocalStorage это синхронное API прямо связанное с нагрузками на дисковую подсистему. Иными словами, когда один код работает с LocalStorage то другой код(вне зависимости от того в какой он вкладке и к какому домену относится) ждет, пока такая работа завершиться.  

*/

//*****************************************************//

(function () {

  const myNumber = 42

  const user = {
    name: 'Max',
    age: 20
  }

  localStorage.setItem('number', myNumber.toString())
  localStorage.setItem('user', JSON.stringify(user))

  const stringObj = localStorage.getItem('user')
  const person = JSON.parse(stringObj)
  person.name = 'Ruslan'

  console.log(person) // {name: "Ruslan", age: 20}


})();

//*****************************************************//