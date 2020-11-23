import words from "../../src/words";
import { test, expect } from "@jest/globals";

test('words from string', () => {
    expect(words('fred, barney, & pebbles'))
        .toBeDefined()
        .toStrictEqual(['fred', 'barney', 'pebbles']);
});

test('words from string with matching', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g))
        .toBeDefined()
        .toStrictEqual(['fred', 'barney', '&', 'pebbles']);
});

test('words from empty string', () => {
    expect(words(""))
        .toBeDefined()
        .toStrictEqual([]);
});

test('words from empty string with matching', () => {
    expect(words("", /[^, ]+/g))
        .toBeDefined()
        .toStrictEqual([]);
});