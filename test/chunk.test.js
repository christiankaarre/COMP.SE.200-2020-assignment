import chunk from '../src/chunk'

console.log(chunk(['a', 'b', 'c', 'd'], 3))

test('Chunk array into arrays with length of one', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toStrictEqual([['a'], ['b'], ['c'], ['d']])
})

test('Chunk arrays with even division', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']])
})

test('Chunk arrays with uneven division', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']])
})

test('Chunk arrays with non-integer divisor', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2.4)).toStrictEqual([['a', 'b'], ['c', 'd']])
})

test('Chunk array type null', () => {
    expect(chunk(null, 2)).toStrictEqual([])
})

