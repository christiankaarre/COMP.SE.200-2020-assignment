import slice from '../src/slice'

test('Slice array, positive division', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 2)).toStrictEqual([3,4])
})

test('Slice array, positive division', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 1)).toStrictEqual([2,3,4])
})

test('Slice array, division more than elements on the array', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 5)).toStrictEqual([])
})

test('Slice array, division more than elements on the array', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 0, 5)).toStrictEqual([1,2,3,4])
})

test('Slice empty array', () => {
    var array = []
    expect(slice(array, 2)).toStrictEqual([])
})

test('Slice empty array', () => {
    var array = null
    expect(slice(array, 2)).toStrictEqual([])
})

test('Slice empty array', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, null, null)).toStrictEqual([])
})

test('Slice array, negative start', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, -1)).toStrictEqual([4])
})

test('Slice array, negative start', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, -6)).toStrictEqual([1, 2, 3, 4])
})

test('Slice array, negative end', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 0, -2)).toStrictEqual([1,2])
})