import defaultToAny from "../src/defaultToAny";
import { test } from "@jest/globals";

test('all defined for defaultToAny', () => {
    expect(defaultToAny(1, 10, 20))
        .toBeDefined()
        .toBe(1);
});

test('all but value defined for defaultToAny', () => {
    expect(defaultToAny(undefined, 10, 20))
        .toBeDefined()
        .toBe(10);
});

test('first two values undefined for defaultToAny', () => {
    expect(defaultToAny(undefined, undefined, 20))
        .toBeDefined()
        .toBe(20);
});

test('all undefined values for defaultToAny', () => {
    expect(defaultToAny(undefined, undefined, undefined))
        .toBeUndefined();
});

test('undefined, null and NaN for defaultToAny', () => {
    expect(defaultToAny(undefined, null, NaN))
        .toBeNaN();
});

test('undefined, null, NaN and defined for defaultToAny', () => {
    expect(defaultToAny(undefined, null, NaN, Number(5)))
        .toBeDefined()
        .toBe(5);
});