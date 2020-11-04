import isArrayLikeObject from "../src/isArrayLikeObject";
import { test } from "@jest/globals";

test('array is array like object', () => {
   let array = Array([1, 2, 3, 4, 5]);
   expect(isArrayLikeObject(array))
       .toBeDefined()
       .toBe(true);
});

test('string is not array like object', () => {
   let string = String("abcdefghijklmn");
   expect(isArrayLikeObject(string))
       .toBeDefined()
       .toBe(false);
});