class LamborghiniCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new LamborghiniCar(
            this.model,
            this.price,
            this.interior,
            this.autopilot
        );
    }
}

const prototypeCar = new LamborghiniCar("Aventador", 20000, "white", true);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = "black";
car1.autopilot = false;

console.log(car1);
console.log(car2);
console.log(car3);
