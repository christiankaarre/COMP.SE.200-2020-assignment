import ceil from '../src/ceil'

test('Positive case', () => {
    expect(ceil(4.0006)).toBe(5)
})

test('Negative case', () => {
    expect(ceil(4.0006)).not.toBe(4)
})

test('Positive case with specified rounding', () => {
    expect(ceil(4.0006,3)).toBe(4.001)
})

test('Negative case with specified rounding', () => {
    expect(ceil(4.9999,2)).toBe(5)
})

test('Positive case with inverse rounding', () => {
    expect(ceil(4,-2)).toBe(100)
})

test('Negative decimal case with inverse rounding', () => {
    expect(ceil(5.002,-2)).toBe(100)
})

test('Infinity', () => {
    expect(ceil(Infinity,-2)).toBe(NaN)
})
