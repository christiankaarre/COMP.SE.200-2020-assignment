import castArray from '../src/castArray'

test('Cast array integer', () => {
    expect(castArray(1)).toStrictEqual([1])
})

test('Cast array object', () => {
    expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }])
})

test('Cast array string', () => {
    expect(castArray('abc')).toStrictEqual(['abc'])
})

test('Cast array null', () => {
    expect(castArray(null)).toStrictEqual([null])
})

test('Cast array undefined', () => {
    expect(castArray(undefined)).toStrictEqual([undefined])
})

test('Cast array empty', () => {
    expect(castArray()).toStrictEqual([undefined])
})

test('Check casted array to be type array', () => {
    const array = [1, 2, 3]
    expect(castArray(array) === array).toBe(true)
})

