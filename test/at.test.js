import at from '../src/at'

test('Correct output', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3,4])
})

test('Incorrect output', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).not.toStrictEqual([2,4])
})

test('Incorrect path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.d', 'a[1]'])).toStrictEqual([undefined,4])
})

test('Modify object', () => {
    var object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3,4])
    object.d = [7]
    expect(at(object, ['a[0].b.c', 'd[0]'])).toStrictEqual([3,7])
    
})

test('Delete object', () => {
    var object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3,4])
    object = {}
    expect(at(object, ['a[0]'])).toStrictEqual([undefined])  
})