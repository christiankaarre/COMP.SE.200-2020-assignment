import isLength from "../src/isLength";
import { test } from "@jest/globals";

test('number is length', () => {
    expect(isLength(Number(3)))
        .toBeDefined()
        .toBe(true);
});

test('min value is not length', () => {
    expect(isLength(Number.MIN_VALUE))
        .toBeDefined()
        .toBe(false);
});

test('infinity is not length', () => {
    expect(isLength(Infinity))
        .toBeDefined()
        .toBe(false);
});

test('number string is not length', () => {
    expect(isLength(String('3')))
        .toBeDefined()
        .toBe(false);
});