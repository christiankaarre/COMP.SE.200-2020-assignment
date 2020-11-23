import defaultTo from "../../src/defaultTo";
import { test, expect } from "@jest/globals";

test('defined parameters with defaultTo', () => {
    expect(defaultTo(Number(5), Number(6)))
        .toBeDefined()
        .toBe(5);
});

test('undefined + defined with defaultTo', () => {
    expect(defaultTo(undefined, Number(6)))
        .toBeDefined()
        .toBe(6);
});

test('undefined + undefined with defaultTo', () => {
    expect(defaultTo(undefined, undefined))
        .toBeUndefined();
});

test('null + defined with defaultTo', () => {
    expect(defaultTo(null, Number(6)))
        .toBeDefined()
        .toBe(6);
});

test('NaN + defined with defaultTo', () => {
    expect(defaultTo(NaN, Number(6)))
        .toBeDefined()
        .toBe(6);
});

test('defined + undefined', () => {
    expect(defaultTo(Number(5), undefined))
        .toBeDefined()
        .toBe(5);
});