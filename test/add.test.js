// beforeEach(() =>  {
//     jest.resetModules();
// });
import add from '../src/add'
//const add = require('../src/add');

test('add numbers', () => {
    expect(add(1, 2)).toBe(3)
})