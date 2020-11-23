import clamp from '../../src/clamp'
import { test, expect } from "@jest/globals";

test('Clamp with positive and negative numbers', () => {
    expect(clamp(10, -5, 5)).toBe(5)
})

test('Clamp with mostly negative numbers', () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
})

test('Clamp with zeros', () => {
    expect(clamp(5, 0, 0)).toBe(0)
})

test('Clamp with reversed boundaries', () => {
    expect(clamp(5, 5, -5)).toBe(5)
})

test('Clamp with incorrect types', () => {
    expect(clamp(5, 'a', 'b')).toBe(0)
})

test('Clamp with incorrect types', () => {
    expect(clamp('c', 0, 0)).toBe(NaN)
})