import isSymbol from "../src/isSymbol";
import { test } from "@jest/globals";

test('Symbol.iterator is symbol', () => {
    expect(isSymbol(Symbol.iterator))
        .toBeDefined()
        .toBe(true);
});

test('symbol is symbol', () => {
    expect(isSymbol(Symbol('abcdefghijk')))
        .toBeDefined()
        .toBe(true);
});

test('string is not symbol', () => {
    expect(isSymbol(String("abcdefghijklmn")))
        .toBeDefined()
        .toBe(false);
});

test('null is not symbol', () => {
    expect(isSymbol(null))
        .toBeDefined()
        .toBe(false);
});

test('object is not symbol', () => {
    expect(isSymbol({"a": "abc"}))
        .toBeDefined()
        .toBe(false);
});