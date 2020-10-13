class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}] Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        // Поле model у нас readonly, и мы его не можем переопределять по дефолту, однако такая опция нам все же доступна, но только в конструкторе.
        this.model = theModel;
    }
}

// ========================

// Модификаторы полей

// Всего существует 3 вида модификаторов: protected, private, public

// Модификатор private - поле класса отмеченное модификатором private не может быть доступно вне этого класса. Инстанс класса не может использовать это поле.
// Модификатор protected - действует аналогично private за исключением того, что поля, объявленные как protected, могут быть доступны в подклассах. Инстанс класса не может использовать это поле.
// Модификатор public - доступен всем классам и инстансам. Если не указывать модификатор у поля, то public ставится по умолчанию.

class Animal {
    
    constructor() {
        this.go();
    }
    
    // Когда мы задаем модификатор protected для определенных свойств, то это означает, что данные поля могут быть доступны в текущем классе(в котором определяется поле), и также они будут доступны в классах, которые наследуются от текущего.
    protected voice: string = '';
    public color: string = 'black';
    private go() {
        console.log("Go")
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
        // this.go() метод недоступен
    }
}

const cat = new Cat();
// cat.voice свойство недоступно

// ========================

// Абстрактные классы

// Абстрактные классы — это базовые классы, от которых наследуются другие. Их экземпляры не могут быть созданы напрямую. 
// В отличие от интерфейса, абстрактный класс может содержать детали реализации своих членов. 
// Ключевое слово abstract используется для определения абстрактных классов, а также абстрактных методов в рамках таких классов.

abstract class Component {
    // описываем методы, которые должны быть реализованы у класса, который будет наследоваться от этого.
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log("Component render");
    }

    info(): string {
        return "Info";
    }
}