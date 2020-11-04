import isObject from "../src/isObject";
import { test } from "@jest/globals";

test('empty object is object', () => {
    expect(isObject({}))
        .toBeDefined()
        .toBe(true);
});

test('array is object', () => {
    let array = Array([1, 2, 3, 4, 5]);
    expect(isObject(array))
        .toBeDefined()
        .toBe(true);
});

test('Function is object', () => {
    expect(isObject(Function))
        .toBeDefined()
        .toBe(true);
});

test('null is not an object', () => {
    expect(isObject(null))
        .toBeDefined()
        .toBe(false);
});

test('undefined is not an object', () => {
    expect(isObject(undefined))
        .toBeDefined()
        .toBe(false);
})

test('string is not an object', () => {
    let string = String("abcdefghijklmn");
    expect(isObject(string))
        .toBeDefined()
        .toBe(false);
});

test('number is not an object', () => {
    let number = Number(1);
    expect(isObject(number))
        .toBeDefined()
        .toBe(false);
});