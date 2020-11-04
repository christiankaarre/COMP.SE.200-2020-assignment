import isSymbol from "../src/isSymbol";
import { test } from "@jest/globals";

test('Symbol.iterator is symbol', () => {
    expect(isSymbol(Symbol.iterator))
        .toBeDefined()
        .toBe(true);
});

test('string is not symbol', () => {
    expect(isSymbol(String("abcdefghijklmn")))
        .toBeDefined()
        .toBe(false);
});