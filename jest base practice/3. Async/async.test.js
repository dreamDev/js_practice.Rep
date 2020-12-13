const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Ajax: echo', () => {
    test('Should return value async', async () => {
        const result = await Ajax.echo('some data');
        expect(result).toBe('some data');
    });

    test('Should return value async', () => {
         Ajax.echo('some data')
            .then(result => {
                expect(result).toBe('some data');
            });
    });

    test('Should return value async', async () => {
        try {
            Ajax.echo();
        } catch(err) {
            expect(err.message).toBe('Error');
        }
    });

    test('Should catch error with promise', () => {
        Ajax.echo('some data')
            .catch(err => {
                expect(err).toBeInstanceOf(Error);
            });
    });
});

describe('Ajax: get', () => {

    let response;
    let todos;

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]

        response = {
            data: {
                todos
            }
        }
    });

    test('Should return data from backend', () => {
        axios.get.mockReturnValue(response);
        return Ajax.get()
            .then(data => {
                expect(data.todos).toEqual(todos);
            })
    });
});