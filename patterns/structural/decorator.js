// С помощью паттерна декоратор мы имеем возможность добавлять какое то новое поведение или функционал для существующих классов.
// Декоратором по сути являются обычные функции, которые принимают инстанс какого то класса, модифицируя его так или иначе и соответственно возвращяя его обратно.

// Другими словами декораторы добавляют какой то слой метаданных для существующих уже объектов и мы можем это использовать в дальнейшем.

class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

// decorator, который добавляет немного функционала
function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
        return server.url
    }
    // Возвращаем инстанс принятого класса с добавленным функционалом
    return server
}

function azure(server) {
    server.isAzure = true
    server.port +- 500
    return server
}

const s1 = aws(new Server('23.13.43.23', 5999))
console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azure(new Server('32.12.34.22', 2500))
console.log(s2.isAzure)
console.log(s2.url)