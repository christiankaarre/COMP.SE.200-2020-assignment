import isObjectLike from "../src/isObjectLike";
import { test } from "@jest/globals";

test('empty object is object like', () => {
    expect(isObjectLike({}))
        .toBeDefined()
        .toBe(true);
});

test('array is object like', () => {
    let array = Array([1, 2, 3, 4, 5]);
    expect(isObjectLike(array))
        .toBeDefined()
        .toBe(true);
});

test('Function is not object like', () => {
    expect(isObjectLike(Function))
        .toBeDefined()
        .toBe(false);
});

test('null is not object like', () => {
    expect(isObjectLike(null))
        .toBeDefined()
        .toBe(false);
});

test('string is not object like', () => {
    expect(isObjectLike(String('abcdefghijklmn')))
        .toBeDefined()
        .toBe(false);
});

test('number is not object like', () => {
    expect(isObjectLike(Number(1)))
        .toBeDefined()
        .toBe(false);
});