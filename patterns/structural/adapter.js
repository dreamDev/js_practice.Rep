// Адаптер позволяет интегрировать старый интерфейс какого то класса, в новый интерфейс. И позволяет им работать совместно, при этом не ломая все приложение.
// Адаптеры часто используются при работе с различными api. Например когда есть старая версия api и новая версия. И адаптер как раз таки позволяет нам использовать старые интерфейсы, для того что бы код не переписывать, но пользоваться уже новым функционалом.

class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case "add":
                return t1 + t2;
            case "sub":
                return t1 - t2;
            default:
                return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }

    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }
    operations(t1, t2, operation) {
        switch (operation) {
            case "add":
                return this.calc.add(t1, t2);
            case "sub":
                return this.calc.add(t1, t2);
            default:
                return NaN;
        }
    }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, "add"));

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5));

const adapter = new CalcAdapter();
console.log(adapter.operations(10, 5, "add"));
