// В треугольных скобках указываем из чего состоит объект, на каоторый мы указали.
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["Hello", "Ruslan"];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

// Сработают обы вызова функции, так как мы указали в generic типе, что тип параметра функции должен подстраиваться под типы, которые есть в передаваемом массиве.
reverse(arrayOfNumbers);
reverse(arrayOfStrings);