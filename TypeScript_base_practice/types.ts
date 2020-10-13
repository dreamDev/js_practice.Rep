// Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// Number
const int: number = 42;
const floaft: number = 4.2;
const num: number = 3e10;

// String
const message: string = "Hello TS";

// Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 12];
// Generic тип. В треугольных скобках указываем из чего состоит массив. То есть в треугольных скобках указывается из чего состоит данный(в нашем случае Array) класс или объект.
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 12];

const words: string[] = ["Hello", "TypeScript"];

// Tuple
const contact: [string, number] = ["Ruslan", 357357];

// Any
let variable: any = 42;
variable = "New variable assign!";
variable = [];

// Возвращаемое значение из функции указывается через двоеточие после перечисления параметров. В данном случае функция ничего не возвращает, поэтому указываем тип void.
let sayMyNane = (name: string): void => {
    console.log(name);
}
sayMyNane("Elena");

// Never
function throwError(message: string) {
    throw new Error(message)
}
function infinite(): never {
    while(true) {}
}

// Type это конструкция в TS, которая позволяет нам создавать свои собственные типы.
// Например мы можем использовать примитивные типы и создавать для них alias.
// Для этого существует специальное ключевое слово type.
type Login = string;

const login: Login = "admin";
// const login2: Login = 42; не сработает

type ID = string | number;

const id1: ID = 123;
const id2: ID = "123";
// const id3: ID = []; не сработает

type SomeType = string | null | undefined;

const thisIsNull: SomeType = null;