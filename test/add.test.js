import add from '../src/add'

test('add numbers', () => {
    expect(add(1, 2)).toBe(3)
})

test('add negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
})

test('add infinite', () => {
    expect(add(Infinity, 5)).toBe(Infinity);
})