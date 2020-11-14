import drop from '../src/drop'

test('Drop first element', () => {
    expect(drop([1, 2, 3])).toStrictEqual([2,3])
})

test('Drop first two elements', () => {
    expect(drop([1, 2, 3], 2)).toStrictEqual([3])
})

test('Drop every element', () => {
    expect(drop([1, 2, 3],3)).toStrictEqual([])
})

test('Negative case, drop none', () => {
    expect(drop([1, 2, 3],0)).toStrictEqual([1,2,3])
})

test('Negative case, drop none', () => {
    expect(drop([1, 2, 3],undefined)).toStrictEqual([2,3])
})

test('Negative case, drop more elements than exists', () => {
    expect(drop([1, 2, 3],4)).toStrictEqual([])
})

test('Negative case, drop negative number of elements', () => {
    expect(drop([1, 2, 3],-2)).toStrictEqual([1, 2, 3])
})

test('Empty array', () => {
    expect(drop([],2)).toStrictEqual([])
})

test('Null array', () => {
    expect(drop(null,2)).toStrictEqual([])
})