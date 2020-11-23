import toNumber from "../../src/toNumber";
import toFinite from "../../src/toFinite";
import toString from "../../src/toString";
import toInteger from "../../src/toInteger";
import { test, expect } from "@jest/globals";

test('Number to String and back', () => {
    expect(toNumber(toString(Number(5))))
        .toBeDefined()
        .toBe(5);
});

test('Infinity to String and back to Number', () => {
    expect(toNumber(toString(Infinity)))
        .toBeDefined()
        .toBe(Infinity);
});

test('NaN to String and back to Number', () => {
    expect(toNumber(toString(NaN)))
        .toBeDefined()
        .toBeNaN();
});

test('Number to Finite and back', () => {
    expect(toNumber(toFinite(Number(5.2))))
        .toBeDefined()
        .toBe(5.2);
});

test('Infinity to Finite and back', () => {
    expect(toNumber(toFinite(Infinity)))
        .toBeDefined()
        .toBe(Number.MAX_VALUE);
});

test('Floating Number to Integer and back', () => {
    expect(toNumber(toInteger(Number(5.2))))
        .toBeDefined()
        .toBe(5);
});

test('NaN to Integer and back to Number', () => {
    expect(toNumber(toInteger(NaN)))
        .toBeDefined()
        .toBe(0);
});

test('Floating Number to Integer and to Finite', () => {
    expect(toFinite(toInteger(Number(5.2))))
        .toBeDefined()
        .toBe(5);
});
