import every from '../../src/every'
import { test, expect } from "@jest/globals";

test('Check every value to be Boolean', () => {
    var array = [true, 1]
    expect(every(array, Boolean)).toBe(true)
})

test('Check every value to not be Boolean', () => {
    var array = [true, 1, null, 'yes']
    expect(every(array, Boolean)).toBe(false)
})

test('Check every value to be Number', () => {
    var array = [2, 1, 3, 4.1]
    expect(every(array, Number)).toBe(true)
})

test('Null array', () => {
    var array = null
    expect(every(array, Number)).not.toBe(false)
})