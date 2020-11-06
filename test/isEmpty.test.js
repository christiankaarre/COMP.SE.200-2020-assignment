import isEmpty from "../src/isEmpty";
import { test } from "@jest/globals";

test('null is empty', () => {
   expect(isEmpty(null))
       .toBeDefined()
       .toBe(true);
});

test('boolean is empty', () => {
    expect(isEmpty(true))
        .toBeDefined()
        .toBe(true);
});

test('number is empty', () => {
    expect(isEmpty(Number(1)))
        .toBeDefined()
        .toBe(true);
});

test('array is not empty', () => {
    expect(isEmpty(Array([1, 2, 3, 4, 5])))
        .toBeDefined()
        .toBe(false);
});

test('string is not empty', () => {
    expect(isEmpty(String("abcdefghijklmn")))
        .toBeDefined()
        .toBe(false);
});

test('object is not empty', () => {
    expect(isEmpty({'a': 1}))
        .toBeDefined()
        .toBe(false);
});

test('empty array is empty', () => {
    expect(isEmpty([]))
        .toBeDefined()
        .toBe(true);
});

test('empty object is empty', () => {
    expect(isEmpty({}))
        .toBeDefined()
        .toBe(true);
});

test('empty map is empty', () => {
    let map = new Map();
    expect(isEmpty(map))
        .toBeDefined()
        .toBe(true);
});

test('empty set is empty', () => {
   let set = new Set();
   expect(isEmpty(set))
       .toBeDefined()
       .toBe(true);
});

test('prototype is empty', () => {
    let stringProto = String.prototype;
    expect(isEmpty(stringProto))
        .toBeDefined()
        .toBe(true);
});

test('object with empty value is not empty', () => {
    let object = Object({'a': undefined});
    expect(isEmpty(object))
        .toBeDefined()
        .toBe(false);
});