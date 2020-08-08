// Стратегия позволяет создовать некоторую оболочку для различных интерфейсов, для того что бы мы могли использовать разные алгоритмы и разные интерфейсы в конкретной задаче.
// Иными словами он определяет семейство некоторых алгоритмов, которые наследуют объекты в неизменяемом порядке.

class Vehicle {
    travelTime() {
        return this.timeTaken;
    }
}

// Первая стратегия Bus
class Bus extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 10;
    }
}

// Вторая стратегия Taxi
class Taxi extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 5;
    }
}

// Третья стратегия Car
class Car extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 3;
    }
}

// Класс, который позволяет показать ту или иную стратегию
class Commute {
    travel(transport) {
        return transport.travelTime();
    }
}

// Теперь с помощью класса Commute мы можем проверять различные стратегии, при этом не ломая предыдущий код.
const commute = new Commute();

// Тестируем нашу оболочку Commute, которая взаимодействует с различными стратегиями.
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));
