import eq from "../../src/eq";
import { test, expect } from "@jest/globals";

test('same objects are equal', () => {
    const object = {'a': 1}
    expect(eq(object, object))
        .toBeDefined()
        .toBe(true);
});

test('same objects with different variables are not equal', () => {
    const object = {'a': 1}
    const other = {'a': 1}
    expect(eq(object, other))
        .toBeDefined()
        .toBe(false);
});

test('same strings are equal', () => {
    expect(eq('a', 'a'))
        .toBeDefined()
        .toBe(true)
});

test('string and object version of string not equal', () => {
    expect(eq('a', Object('a')))
        .toBeDefined()
        .toBe(false)
});

test('NaNs are equal', () => {
    expect(eq(NaN, NaN))
        .toBeDefined()
        .toBe(true);
});