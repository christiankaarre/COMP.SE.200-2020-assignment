import difference from '../../src/difference'
import { test, expect } from "@jest/globals";

test('Difference between two arrays', () => {
    expect(difference([2, 1], [2, 3])).toStrictEqual([1])
})

test('Difference between array and empty', () => {
    expect(difference([2, 1])).toStrictEqual([2, 1])
})

test('CDifference of null', () => {
    expect(difference(null)).toStrictEqual([])
})