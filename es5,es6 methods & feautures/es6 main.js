// ES6

/* ES6 Array methods */

//*****************************************************//

(function () {

  // Practice example

  const response = [{ index: 0, name: "Tom", gender: "male", age: 20, isActive: true },
                    { index: 1, name: "Robert", gender: "female", age: 22, isActive: false },
                    { index: 2, name: "Nina", gender: "female", age: 17, isActive: true },
                    { index: 3, name: "Korben", gender: "male", age: 32, isActive: false },
                    { index: 4, name: "Angela", gender: "female", age: 27, isActive: false }];

  const users = [{index: undefined, name: 'Rita', gender: 'female', age: 39, isActive: false},
                  {index: undefined, name: 'John', gender: 'male', age: 25, isActive: true},
                  {index: undefined, name: 'Kobe', gender: 'male', age: 22, isActive: true},];

  let result = [...response, ...users]
    .filter(elem => elem.age > 20)
    .map((elem, i) => {
      return {
        info: `${elem.name} ${elem.gender} ${elem.age}`,
        userId: elem.index = i + 1,
        isActive: false
      }
    })

  console.log(result); 
  /* (6) [{…}, {…}, {…}, {…}, {…}, {…}]
  0: {info: "Robert female 22", userId: 1, isActive: false}
  1: {info: "Korben male 32", userId: 2, isActive: false}
  2: {info: "Angela female 27", userId: 3, isActive: false}
  3: {info: "Rita female 39", userId: 4, isActive: false}
  4: {info: "John male 25", userId: 5, isActive: false}
  5: {info: "Kobe male 22", userId: 6, isActive: false}
  length: 6
  __proto__: Array(0) */

})();

//*****************************************************//

/* Spread(расширение) и Rest(остаточные параметры) операторы 

Когда мы видим "..." в коде, это могут быть как Spread, так и Rest операторы.

Как отличить их друг от друга:
-- Если ... располагается в конце списка аргументов функции, то это «остаточные параметры». Он собирает остальные неуказанные аргументы и делает из них массив. Также Rest оператор может распологаться в конце шаблона при деструктуризации. Он так же соберет все остаточные элементы в массив или объект в зависимости от того, что мы хотим деструктуризировать.
-- Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива.
Полезно запомнить:

Остаточные параметры используются, чтобы создавать новые функции с неопределённым числом аргументов.

С помощью оператора расширения можно вставить массив в функцию, которая по умолчанию работает с обычным списком аргументов.

Вместе эти конструкции помогают легко преобразовывать наборы значений в массивы и обратно.

*/

//*****************************************************//
/* Spread оператор */

// Важно помнить, что Spread оператор работает с ЛЮБЫМ перебираемым(итерируемым) объектом, например строкой.

(function () {

  // Example 1: Arrays and Strings

  const array1 = [1, 2, 3, 4];
  const array2 = [5, 6, 7, 8];
  const string = "John";

  // Реализация склеивания двух массивов в один на es5.
  const merge1 = [].concat(array1, array2);
  // const merge1 = array1.concat(array2); -- Данная запись делает то же самое, что и запись выше, так как метож concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
  console.log(merge1); //  [1, 2, 3, 4, 5, 6, 7, 8]

  // Реализация склеивания двух массивов в один на es6 с помощью Spread оператора.
  const merge2 = [...array1, ...array2];
  console.log(merge2); //  [1, 2, 3, 4, 5, 6, 7, 8]
  
  // Разбиваем строку на символы.
  console.log(...string); // J o h n
  console.log([...string]); // ["J", "o", "h", "n"]


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

  // Метод клонирования через Spread на es6.
  // В этой реализации свойства с одинаковым именем также перетираются как и в предыдущем примере с Object assign().
  const secondPerson = {
    ...user,
    ...job
  }
  // Теперь вы имеем новый объект со свойствами, которые были скопированы из окбъектов, которые указали.
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

  // Example 4: Practice

  // Выбираем все span елементы на странице с помощью метода querySelectorAll() и получаем коллекцию узлов типа NodeList. NodeList не является массивом(Array), но его вполне возможно перебрать при помощи метода forEach(). Однако другие методы массивов нам будут недоступны. NodeList также можно конвертировать в Array при помощи Array.from()
  let spans = document.querySelectorAll('span');

  // С помощью Spread оператора мы "конвертировали" NodeList в Array и теперь можем применять любые методы массивов.
  let nodes = [...spans];
  console.log(nodes, Array.isArray(nodes)) // [span, span, span, span] true

  // Конвертируем NodeList в Array с помощью Array.from().
  let divs = Array.from(document.querySelectorAll('div'));

  console.log(divs, Array.isArray(divs)); // [div.body-shadow, div.container, div.background-img, div.box, div.content] true

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

  thirdPerson.greet(); // this.userName = 'Jack', this = thirdPerson {...}

})();

//*****************************************************//


/* Цикл for...of  

Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

Различия между for...of и for...in:

1) Оба оператора, и for...in и for...of производят обход объектов . Разница в том как они это делают.
2) Для for...in обход перечисляемых(enumerable) свойств объекта осуществляется в произвольном порядке.
3) Для for...of обход происходит в соответствии с тем, какой порядок определен в итерируемом объекте.

Важно помнить, что цикл for...in так же пробегается по прототипу заданного объекта, что бы не выводить поля из прототипа, необходимо делать промерку с помощью метода Object.prototype.hasOwnProperty().

*/

//*****************************************************//

(function () {

  // Цикл for...of перебирает значения итерируемой сущности. 

  const names = ['Tomas', 'Jhonny', 'Steve', 'Kobe', 'Ludvig'];

  // Цикл for...in стандарта es5 вместо значения будет выводить его порядковый номер, то есть индекс.
  for(let index in names) {
    // Данным условием мы не позволяем циклу вывести наследуемые свойства из прототипа, так как цикл for...in пройдёт по всем перечисляемым свойствам объекта, а также тем, что он унаследует от конструктора прототипа (свойства объекта в цепи прототипа). Это означает, что без данной проверки, цикл так же выведет созданный нами раннее метод multBy().
    if (names.hasOwnProperty(index))

    console.log(index); // 0 1 2 3 4
  }

  // Решение проблемы на es5
  for(let index in names) {
    // Делаем такую же проверку, как в примере выше.
    if (names.hasOwnProperty(index))

    console.log(names[index]); // Tomas Jhonny Steve Kobe Ludvig
  }

  // Выводим значения массива новым циклом es6 for...of. В данном случае нам не нужна проверка на собственные свойства, как в примере выше.
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


/* Объекты: Создание и конфигурация 

Метод Object.create() создаёт новый объект с указанными объектом прототипа и свойствами.

-- Base syntax:
-- Object.create(proto[, propertiesObject])

Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги» или дескрипторы).

- writable – если true, свойство можно изменить, иначе оно только для чтения.
- enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
- configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

Когда мы создаём свойство «обычным способом»(литерал объектом), все они имеют значение true. Но мы можем изменить их в любое время.

Но когда мы создаем объект с помощью Object.create(), все дескрипторы получают значение false.

Метод Object.getOwnPropertyDescriptor() позволяет получить полную информацию о свойстве.
Чтобы изменить флаги, мы можем использовать метод Object.defineProperty() или Object.defineProperties() для того, что бы изменить дескрипторы у нескольких свойств сразу.

-- Сеттеры(set()) и Геттеры(get())

Есть два типа свойств объекта:
- Первый тип это свойства-данные (data properties).
- Второй тип свойств это свойства-аксессоры (accessor properties).

По своей сути свойства-аксессоры(сеттеры и геттеры) это функции, которые используются для ПРИСВОЕНИЯ(записи) и ПОЛУЧЕНИЯ(чтения) значения, но во внешнем коде они выглядят как обычные свойства объекта.

Когда мы читаем свойство свойство-аксессор срабатывает как геттер, когда мы присваиваем(записываем) значение свойство срабатывает как сеттер.

Дескрипторы свойств-аксессоров отличаются от «обычных» свойств-данных!

Свойства-аксессоры НЕ имеют value и writable, но взамен предлагают функции get и set.

То есть, дескриптор аксессора может иметь:
- get – функция без аргументов, которая сработает при чтении свойства,
- set – функция, принимающая один аргумент, вызываемая при присвоении свойства,
- enumerable – то же самое, что и для свойств-данных,
- configurable – то же самое, что и для свойств-данных.

*/

//*****************************************************//

(function () {

  // Example 1: Object.create()

  const person = Object.create(
    // Первым параметром метода Object.create() задается объект в котором мы указываем прототип нового создаваемого объекта. То есть указываем объект, от которого в данном случае person будет наследовать.
    // Кроме объекта мы так же можем указать методы, которые нужно наследовать.
    // В es6 мы можем объявлять методы сразу, без двоеточия и ключевого слова function.
    {
      getNameAndAge() {
        return this.name + " " + this.age;
      }
    }, 
    {
      name: {
        value: 'Lena',
        enumerable: true,
        configurable: true,
        writable: false
      },
      age: {
        value: 23,
        enumerable: true,
        writable: true,
        configurable: false
      },
      job: {
        value: 'Babysitter',
        enumerable: true,
        configurable: false,
        writable: true
      },
      birthYear: {
        get() {
          return new Date().getFullYear() - this.age;
        }
      },
      ageAndJob: {
        get() {
          return `Age: ${this.age}, Job: ${this.job}.`;
        },
        set(value) {
          [this.age, this.job] = value.split(" ");
        }
      }
    }
  );

  console.log(person.getNameAndAge()); // Lena 23

  person.ageAndJob = "27 Frontend";
  console.log(person.birthYear); // 1993

  let descriptor = Object.getOwnPropertyDescriptor(person, 'job');
  console.log(descriptor); // {value: "Frontend", writable: true, enumerable: true, configurable: false}

  delete person.age; // false
  person.name = 'Nina'; // false
  
  for (let key in person) {
    if (person.hasOwnProperty(key))
    console.log(person[key]); // Lena 27 Frontend
  }

  console.log(person); // {name: "Lena", age: "27", job: "Frontend"}

// Example 2: Объектный литерал

  let phone = '333-666';
  let adress = 'Baltic street 13';
  let gender = 'male';

  const citizen = {
    name: 'Vasya',
    phone,
    adress,
    gender,
    saiHi() {
      console.log('Hello', this.name);
    }
  }

  console.log(citizen); // {name: "Vasya", phone: "333-666", adress: "Baltic street 13", gender: "male", saiHi: ƒ}
  citizen.saiHi(); // Hello Vasya

})();

//*****************************************************//


/* Class (Классы) 

Class declaration:

-- class Task {};

Class expression:

-- let task = class Task {};

*/

//*****************************************************//

(function () {

  // Example 1:

  class Animal {

    // Определяем свтические свойства и методы, которые будут присутствовать только у самого КЛАССА, в данном случае Animal. В инстансе lion доступа к ним не будет.
    // Но следует помнить, что статические методы и свойства будут доступны наследуемым КЛАССАМ.
    static type = 'ANIMAL'
    static jump() {
      let counter = 0;
      let interval = setInterval(() => {
        console.log('Animal is jumping');
        counter++;
        if (counter == 3)
        clearInterval(interval);
      }, 1500)
    }

    // В методе constructor мы определяем поля нашего класса, с которыми он будет вызываться и создаваться новый инстанс.
    // Передавать свойства можно в виде объекта, как в данном примере.
    // Так же следует помнить, что конструктор родительского класса наследуется подклассами.
    constructor(options) {
      this.name = options.name
      this.age = options.age
      this.hasTail = options.hasTail
    }

    // Методы будут записываться в прототип инстанса, а не в сам инстанс.
    // Методы так же будут наследоваться другими классами и инстансами.
    voice() {
      console.log('Hi, i am ' + this.name);
    }

    // Сеттеры и геттеры так же наследуются классами и инстансами
    get ageInfo() {
      return this.age * 2;
    }

    set ageInfo(newAge) {
      this.age = newAge;
    }

  }

  // Ключевое слово extends означает, что мы будем наследовать от класса Animal.
  class Fish extends Animal {
    
    // Важно помнить, что все дочерние методы и свойства с одинаковым именем перетирают родительские свойства и методы. 
    static type = 'FISH'

    constructor(options) {
      // Чтобы наследовать от другого класса, мы должны вызвать его конструктор. Для этого нужно использовать ключевое слово super, которое по сути является методом, и передать в него набор опций.
      super(options)
      this.isPredator = options.isPredator
    }

    catch() {
      console.log("I'l catch any fish and eat them!")
    }

  }

  const lion = new Animal({
    name: 'Lion',
    age: 7,
    hasTail: true
  });

  const pike = new Fish({
    name: 'Pike',
    age: 3,
    hasTail: true,
    isPredator: true
  })

  console.log(lion); // Animal {name: "Lion", age: 7, hasTail: true}
  console.log(pike); // Fish {name: "Pike", age: 3, hasTail: true, isPredator: true}

  Animal.jump(); // x3 Animal is jumping
  Fish.jump(); // x3 Animal is jumping

  // Example 2:

  class Component {
    constructor(selector) {
      // Обычно через доллар обозначают переменную, которые содержат в себе какую то DOM ноду.
      this.$el = document.querySelector(selector)
    }
    hide() {
      this.$el.style.display = 'none'
    }
    show() {
      this.$el.style.display = 'block'
    }
  }

  class Shadow extends Component {
    constructor(options) {
      // После того, как мы вызвали метод super, запускается механизм наследования конструктора и нам становятся доступны переменные родительского класса, соответственно мы можем к ним обращаться, а так же расширять конструктор другими своими переменными.
      // По сути этот прием является аналогом es5, когда мы в конструкторе дочернего класса вызывали свойства родительского с помощю Obj.call(this, ...props).
      super(options.selector)
      this.$el.style.cssText = options.cssText
    }
  }

  const bodyShadow = new Shadow({
    selector: '.body-shadow',
    cssText: `position: absolute;
              top: -10px;
              left: 0;
              width: 100%;
              height: 10px;
              box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.8);
              z-index: 100;`
  });

  console.log(bodyShadow) // Shadow {$el: div.body-shadow}

})();

//*****************************************************//


/* Деструктурирующее присваивание

Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в кучу переменных, так как иногда они более удобны. Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее.

Синтаксис деструктурирующего выражения всегда будет одинаковый и будет состоять из двух частей:
1) Это деструктурирующее выражение с переменными.
2) Массив или объект значения которых должны быть взяты.

*/

//*****************************************************//

(function () {

  // Example 1: Array destructing

  const array1 = ['Lena', 'Jinni', 'Alladin'];
  const array2 = ['Nina', 'Alla', 'Tom', 'John', 'Rob', 'Kenni', 'Jordan'];

  // Деструктурирующее присваивание es5
  let lena = array1[0];
  let jinni = array1[1];
  let alladin = array1[2];

  console.log(lena, jinni, alladin); // Lena Jinni Alladin

  // Деструктурирующее присваивание es6
  // В данном примере, с левой части находится деструктурирующее выражение, а с правой части массив, значения которого будут присвоены внутри деструктурирующего выражения.
  // Не забываем о том, что мы можем использовать rest оператор и "сложить" в него(масиив) остаточные элементы.
  let [nina, alla, tom, ...rest] = array2;

  // Деструктурирующее присваивание в одну строку.
  let [name, age, id] = ['name', 'age', 'id'];

  console.log(nina, alla, tom, rest); // Nina Alla Tom ["John", "Rob", "Kenni", "Jordan"]
  console.log(name, age, id); // name age id

  // Дуструктуризация многомерного массива
  const array3 = [5, 10, 15, [20, 25]];

  let [a, b, c, [d, e]] = array3;

  console.log(a, b, c, d, e); // 5 10 15 20 25

  // Мы так же можем использовать дефолтные значения при деструктуризации как массивов, так и объектов.

  // С помощью пробела и запятой, мы можем пропускать значения, в данном примере мы пропускаем первое значение, но так как у него есть дефолтное значение, то оно и присваивается.
  let [arg1 = 'defaultValue', arg2] = [ , 'Value'];

  console.log(arg1, arg2) // defaultValue Value

  // Example 2: Objects

  // У нас есть существующий объект с правой стороны, который мы хотим разделить на переменные. Левая сторона содержит «шаблон» для соответствующих свойств. В простом случае это список названий переменных в {...}.

  let params = {
    isActive: true,
    color: 'red',
    fontSize: 12
  };
  
  // Свойства params.isActive, params.color и params.fontSize присваиваются соответствующим переменным. Порядок перечисления свойств в шаблоне и объекте не имеет значения.
  let {isActive, color, fontSize} = params;

  console.log(isActive, color, fontSize); // true "red" 12
  
  // Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство params.fontSize присвоить переменной fz, то мы можем использовать двоеточие:

  // { sourceProperty: targetVariable }
  let {fontSize: fz, color: col, isActive: isOn} = params;

  console.log(isOn, col, fz); // true "red" 12

  // Мы так же можем использовать заранее созданные переменные, что бы записать в них части массива или обкта.

  let firstArg, secondArg;

  // В подобном случае, что бы не получить ошибку, мы должны наше выражение обернуть в круглые скобки, иначе интерпритатор посчитает, что это обычный блок кода, а не деструктуризация и выдаст ошибку.
  ({firstArg, secondArg = 'Petrucci', thirdArg: {job: work}} = {firstArg: 'Tom', thirdArg: {job: 'SMM'}});

  console.log(firstArg, secondArg, work); // Tom Petrucci SMM

  // Example 3: Functions

  // Мы можем указать параметры как объект, и функция немедленно деструктурирует его в переменные:
  
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  // ...и она немедленно извлекает свойства в переменные
  function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – взято из options,
    // width, height – используются значения по умолчанию
    console.log(`${title} ${width} ${height}`); // My Menu 200 100
    console.log(items); // [Item1, Item2]
  }

  showMenu(options);

  // Мы также можем использовать более сложное деструктурирование с вложенными объектами и двоеточием:

  function showMenu2({
    title = "Untitled",
    width: w = 100,  // width присваиваем в w
    height: h = 200, // height присваиваем в h
    items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
  }) {
    console.log(`${title} ${w} ${h}`); // My Menu 100 200
    console.log(item1); // строка Item1
    console.log(item2); // строка Item2
  }
  
  showMenu2(options);

})();

//*****************************************************//


/* Map, Set 

Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи ЛЮБОГО типа.

Методы и свойства Map:
-- new Map() – создаёт коллекцию.
-- map.set(key, value) – записывает по ключу key значение value. Возвращает объект Map
-- map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
-- map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
-- map.delete(key) – удаляет элемент по ключу key. При успешном удалении возвращает true, иначе, например если нет такого ключа, false.
-- map.clear() – очищает коллекцию от всех элементов.
-- map.size – возвращает текущее количество элементов.

Объект Set – это особый вид коллекции: «множество» УНИКАЛЬНЫХ значений (без ключей), где каждое значение может появляться только ОДИН раз.

Основные методы Set это:
-- new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
-- set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
-- set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
-- set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
-- set.clear() – удаляет все имеющиеся значения.
-- set.size – возвращает количество элементов в множестве.

Перебор коллекций Map и Set:

Map:
-- map.keys() – возвращает итерируемый объект по ключам,
-- map.values() – возвращает итерируемый объект по значениям,
-- map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

Set имеет те же встроенные методы, что и Map:
-- set.keys() – возвращает перебираемый объект для значений,
-- set.values() – то же самое, что и set.keys(), присутствует для обратной совместимости с Map,
-- set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.

*/

//*****************************************************//

// Example 1: Map

(function () {

  const obj = {
    name: 'Ruslan',
    age: 26,
    job: 'Frontend'
  }

  const entries = [
    ['name', 'Ruslan'],
    ['age', 26],
    ['job', 'Frontend']
  ]

  // Object.entries() возвращает массив, элементами которого являются массивы, соответсвующие перечисляемому свойству пары [key, value], найденной прямо в object. Порядок свойств тот же, что и при прохождении циклом по свойствам объекта вручную.
  console.log(Object.entries(obj)); // [['name', 'Ruslan'], ['age', 26], ['job', 'Frontend']]

  // Метод Object.fromEntries() принимает список пар ключ-значение и возвращает новый объект, свойства которого задаются этими записями.
  console.log(Object.fromEntries(entries)); // {name: "Ruslan", age: 26, job: "Frontend"}

  // В конструктор передаем многомерный массив с внутренними массивами содержащими key/value.
  const map = new Map(entries);
  const map2 = new Map(Object.entries(obj));

  // Map может использовать ЛЮБЫЕ типы данных в качестве ключей, даже NaN. Например объект:
  map.set(obj, 'user')

  // Получаем значение по ключу.
  console.log(map.get(obj)); // user
  console.log(map.get('name')); // Ruslan

  map.delete('job')

  console.log(map); // Map(3) {"name" => "Ruslan", "age" => 26, {…} => "user"}
  console.log(map.size); // 3

  console.log(map2); // Map(3) {"name" => "Ruslan", "age" => 26, "job" => "Frontend"}

  // Итерация

  for (let [key, value] of map) {
    console.log(key, value) // name Ruslan  age 26  {...} "user"
  }

  for (let value of map.values()) {
    console.log(value) // Ruslan 26 user
  }

  for (let keys of map.keys()) {
    console.log(keys) // name age {...}
  }

  map.forEach((value, key, map) => {
    console.log(key, value) // name Ruslan  age 26  {...} "user"
  })

  // Получение массива из Map

  const arr1 = [...map]
  const arr2 = Array.from(map)
  console.log(arr1); // [['name', 'Ruslan'], ['age', 26], [{...}, "user"]]
  console.log(arr2); // [['name', 'Ruslan'], ['age', 26], [{...}, "user"]] 

  // Получение объекта из Map

  const mapObj = Object.fromEntries(map.entries())

  // Следует обратить внимание на то, что при использовании объекта в качестве ключа, он будет сконвертирован в [object Object], так как в обычных объектах, не могут быть ключами другие объекты.
  console.log(mapObj); // {name: "Ruslan", age: 26, [object Object]: "user"}

  // Practice example

  const users = [
    {name: 'Elena'},
    {name: 'Ruslan'},
    {name: 'Larisa'}
  ]

  const visits = new Map()

  visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

  const lastVisit = user => visits.get(user)

  console.log(lastVisit(users[1])) // Sat Mar 28 2020 16:56:43 GMT+0700 (Новосибирск, стандартное время)
  console.log(lastVisit(users[2])) // Sat Mar 28 2020 17:02:00 GMT+0700 (Новосибирск, стандартное время)

})();

// Example 2: Set

(function () {

  const set = new Set([1, 2, 3, 4, 5, 5, 6])

  console.log(set); // Set(6) {1, 2, 3, 4, 5, 6}

  set
    .add(10)
    .add(20)
    .add(20)

  set.delete(3)
  console.log(set.has(3)) // false
  console.log(set.size) // 7
  console.log(set); // Set(7) {1, 2, 4, 5, 6, 10, 20}

  // Методы values() и keys() выдают нам один и тот же результат, так как в Set хранятся лишь значения.
  // При использовании метода entries(), ключи, будут такие же, как и значения, то есть дублируются.
  console.log(set.values()) // SetIterator {1, 2, 4, 5, 6, …}
  console.log(set.keys()) // SetIterator {1, 2, 4, 5, 6, …}

  // Итерация
  for (let key of set) {
    console.log(key) // 1 2 4 5 6 10 20
  }

  // Practice example

  const unicValues = (array) => [...new Set(array)]

  console.log(unicValues([1, 2, 3, 4, 4, 4, 5, 6, 6, 6,])) // Array(6) [1, 2, 3, 4, 5, 6]

})();

//*****************************************************//


/* WeakMap, WeakSet

WeakMap – это Map-подобная коллекция, позволяющая использовать в качестве ключей только объекты, и автоматически удаляющая их вместе с соответствующими значениями, как только они становятся недостижимыми иными путями.

WeakMap не предотвращает удаление объектов сборщиком мусора, когда эти объекты выступают в качестве ключей.
Если мы используем объект в качестве ключа и если больше нет ссылок на этот объект, то он будет удалён из памяти (и из объекта WeakMap) автоматически.

WeakMap не поддерживает перебор и методы keys(), values(), entries(), так что нет способа взять все ключи или значения из неё.

В WeakMap присутствуют только следующие методы:
-- weakMap.get(key)
-- weakMap.set(key, value)
-- weakMap.delete(key)
-- weakMap.has(key)

WeakSet – это Set-подобная коллекция, которая хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.

Коллекция WeakSet ведёт себя похоже:
-- Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
-- Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
-- Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.

*/

//*****************************************************//

// Example 1: WeakMap

(function () {

  const cache = new WeakMap()

  const cacheUser = user => {
    if (!cache.has(user)) cache.set(user, Date.now())
    return cache.get(user)
  }

  let user1 = {name: 'Elena'}
  let user2 = {name: 'Ruslan'}

  cacheUser(user1)
  cacheUser(user2)

  user1 = null

  console.log(cache.has(user1)); // false
  console.log(cache.get(user1)); // undefined

  console.log(cache.has(user2)); // true
  console.log(cache.get(user2)); // 1585483372246
  
})();

// Example 2: WeakSet

(function () {

  const users = [
    {name: 'Elena'},
    {name: 'Ruslan'},
    {name: 'Larisa'}
  ]

  const visits = new WeakSet()

  visits
    .add(users[0])
    .add(users[1])

  // Удаляем один элемент по индексу 1
  users.splice(1, 1)

  console.log(visits.has(users[0])); // true
  console.log(visits.has(users[1])); // false

})();

//*****************************************************//