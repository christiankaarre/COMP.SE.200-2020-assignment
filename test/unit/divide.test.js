import divide from '../../src/divide'
import { test, expect } from "@jest/globals";

test('Positive case, integer', () => {
    expect(divide(6,3)).toBe(2)
})

test('Positive case, fraction', () => {
    expect(divide(6,4)).toBe(1.5)
})

test('Positive case, number divided by itself', () => {
    expect(divide(6,6)).toBe(1)
})

test('Negative number as divisor', () => {
    expect(divide(6,-2)).toBe(-3)
})

test('Negative number as dividend', () => {
    expect(divide(-6,2)).toBe(-3)
})

test('Infinity as dividend', () => {
    expect(divide(Infinity,2)).toBe(Infinity)
})

test('Infinity as divisor', () => {
    expect(divide(2,Infinity)).toBe(0)
})

test('Undefined as divisor', () => {
    expect(divide(2,undefined)).toBe(2)
})

test('Undefined as divisor', () => {
    expect(divide(undefined,2)).toBe(2)
})

