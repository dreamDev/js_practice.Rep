// ES5

/* Методы перебирающие массив

-- forEach() --
Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве. 
Метод forEach() не возвращает никакого значения, при попытке вернуть значение из метода, получим undefined.

-- map() --
Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. 
Метод map() может возвращать результат своей работы.

-- filter() --
Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
Передаваемая функция, должна быть функцией-предикатом, то есть возвращать true или false.
Метод filter() возвращает массив с элементами, которые проходят проверку(тест) у callback функции(в данном случае у функции-предиката). Если ни один элемент не пройдёт тест, то будет возвращён пустой массив.

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

