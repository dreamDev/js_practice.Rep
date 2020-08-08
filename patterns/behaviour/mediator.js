// Посредник - это паттерн, который в первую очередь позволяет нам выстраивать очень плотную и тесную коммуникацию между объектами разного типа.
// При этом он предоставляет некоторую централизованную абстракцию, которая позволяет взаимодействовать группе объектов через эту абстракцию.

class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    recieve(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) 
            to.recieve(message, from);
        else
            Object.keys(this.users).forEach((key) => {
                if (this.users[key] != from)
                    this.users[key].recieve(message, from);
            });
    }
}

const ruslan = new User("Ruslan");
const elena = new User("Elena");
const dima = new User("Dima");

const room = new ChatRoom();

room.register(ruslan);
room.register(elena);
room.register(dima);

ruslan.send("Hello!", elena);
elena.send("Welcome!", dima);
dima.send("Hello World!");
