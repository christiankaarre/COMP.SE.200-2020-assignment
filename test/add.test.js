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

test('add undefined', () => {
    expect(add(undefined, 5)).toBe(5);
})

test('add null', () => {
    expect(add(null, 5)).toBe(5);
})

test('add undefined', () => {
    expect(add(undefined, undefined)).toBe(0);
})

test('add null', () => {
    expect(add(null, null)).toBe(0);
})