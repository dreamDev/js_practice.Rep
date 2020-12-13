// Простой пример тустирующей функцции.
const expect = value => {
    return {
        // expectation это значение, которое мы ожидаем получить, после выполнения функции, которую передадим.
        toBe: exp => {
            if (value === exp) {
                console.log('Success')
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`)
            }
        }
    }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = {sum, nativeNull};

// expect(sum(41, 1)).toBe(42);