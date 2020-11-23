 import memoize from '../../src/memoize'
 import { test, expect } from "@jest/globals";

test('Memoise example', () => {
    const object = { 'a': 1, 'b': 2 }
    const values = memoize(Object.values)
    expect(values(object)).toStrictEqual([1,2])
})


test('Memoise throw', () => {
    expect(() => {memoize('Object.values')}).toThrow(TypeError)
})

test('Modify cache', () => {
    const object = { 'a': 1, 'b': 2 }
    const values = memoize(Object.values)
    values.cache.set(object, ['a', 'b'])
    expect(values(object)).toStrictEqual(['a', 'b'])
})

test('Modify cache', () => {
    const object = {}
    const values = memoize(Object.values)
    memoize.Cache = WeakMap
    values.cache.set(object, ['a', 'b'])
    expect(values(object)).toStrictEqual(['a', 'b'])
})

