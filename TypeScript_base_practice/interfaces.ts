// Интерфейсы
// По сути мы создаем некоторый тип(который в основном служит для объектов или для классов), где мы указываем, какие поля, функции, элементы должны присутвовать(должны быть реализованы) у объектов.

interface Rect {
    // ключевое слово readonly означает, что это свойство только для чтения и мы не сможем его изменить.
    readonly id: string
    // так же мы можем пометить параметры как необязательные путем добавления знака ? после объявления и перед указанием типа.
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "some text",
    size: {
        width: 20,
        height: 30
    },
    color: "#ccc"
}

// rect1.id = "another id" не сработает, так как id - это readonly поле.

const rect2: Rect = {
    id: "text",
    size: {
        width: 10,
        height: 20
    }
}

rect2.color = "red";

// Так же мы можем указывать к какому типу будет относиться объект с помощью такого синтаксиса.
const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ==============================

// Наследование интерфейсов.

interface RectWithArea extends Rect {
    // указываем, что тип поля getArea это стрелочная функция и значение, которое оно возвращает должно быть number.
    getArea: () => number
}

const rect5: RectWithArea = {
    id: "text",
    size: {
        width: 10,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

// ==============================

// часто интерфейсы называют через большую букву I, что говорит о том, что это интерфейс
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// ==============================

// Бывают ситуации, когда необходимо создать интерфейс для объекта, у которого будет большое кол-во динамических ключей.
// Все ключи перечислять мы не можем, это будет неэффективно.
// Поэтому мы можем воспользоваться следующим синтаксисом.
// В квадратных скобках мы указываем тип ключа, с помощью ключевого слова key. А значение для этого ключа указываем как обычно через двоеточие.
interface Styles {
    [key: string]: string | number
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "3px",
    opacity: 0.8
}