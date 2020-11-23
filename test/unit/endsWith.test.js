import endsWith from '../../src/endsWith'
import { test, expect } from "@jest/globals";

test('endsWith', () => {
    expect(endsWith('abc', 'c')).toBe(true)
})

test('endsWith', () => {
    expect(endsWith('abc', 'b')).toBe(false)
})

test('endsWith', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true)
})

test('endsWith', () => {
    expect(endsWith('abc', 'c', 4)).toBe(true)
})

test('endsWith', () => {
    expect(endsWith('abc', 'a', -1)).toBe(false)
})
