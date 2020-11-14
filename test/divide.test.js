import divide from '../src/divide'

test('Positive case, integer', () => {
    expect(divide(6,3)).toBe(2)
})

test('Positive case, fraction', () => {
    expect(divide(6,4)).toBe(1.5)
})

test('Positive case, number divided by itself', () => {
    expect(divide(6,6)).toBe(1)
})
