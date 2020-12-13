const {sum, nativeNull} = require('./intro');

// describe - функция, которя позваоляет объединять тест кейсы.
describe('Sum function', () => {
    test('Should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4);
        expect(sum(1, 3)).toEqual(4);
    });

    test('Should return value correctly comparing to other values', () => {
        expect(sum(2, 3)).toBeGreaterThan(4);
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
        expect(sum(2, 3)).toBeLessThan(10);
        expect(sum(2, 3)).toBeLessThanOrEqual(5);
    });

    test('Should sum 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe('Native null function', () => {
    test('Should return falsy value null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    });
});