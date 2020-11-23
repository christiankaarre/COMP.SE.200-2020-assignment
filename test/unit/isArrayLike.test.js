import isArrayLike from "../../src/isArrayLike";
import { test, expect } from "@jest/globals";

test('array is array like', () => {
   let array = Array([1, 2, 3, 4, 5]);
   expect(isArrayLike(array))
       .toBeDefined()
       .toBe(true);
});

test('string is array like', () => {
    let string = String("abcdefghijklmn");
    expect(isArrayLike(string))
        .toBeDefined()
        .toBe(true);
});

test('null is not array like', () => {
   expect(isArrayLike(null))
       .toBeDefined()
       .toBe(false);
});

test('undefined is not array like', () => {
    expect(isArrayLike(undefined))
        .toBeDefined()
        .toBe(false);
});

test('number is not array like', () => {
    let number = Number(5);
    expect(isArrayLike(number))
        .toBeDefined()
        .toBe(false);
});

test('function is not array like', () => {
    expect(isArrayLike(Function))
        .toBeDefined()
        .toBe(false);
});
