import { reducer } from "./reducer";

describe('Reducer test', () => {

    let incAction = {
        type: 'INCREMENT'
    }

    test('Should return 4', () => {
       expect(reducer(3, incAction)).toBe(4);
    });
});