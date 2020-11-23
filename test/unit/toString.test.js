import toString from "../../src/toString";
import { test, expect } from "@jest/globals";

test('null to string', () => {
    expect(toString(null))
        .toBeDefined()
        .toBe('');
});

test('number to string', () => {
    expect(toString(-0))
        .toBeDefined()
        .toBe('-0');
});

test('array to string', () => {
    expect(toString([1, 2, 3, 4, 5]))
        .toBeDefined()
        .toBe('1,2,3,4,5');
});

test('string to string', () => {
    let string = String('abcdefghijklmn');
    expect(toString(string))
        .toBeDefined()
        .toBe(string);
});

test('symbol to string', () => {
    expect(toString(Symbol("abc")))
        .toBeDefined()
        .toBe('Symbol(abc)');
});

test('null array to string', () => {
    expect(toString([null]))
        .toBeDefined()
        .toBe('');
});