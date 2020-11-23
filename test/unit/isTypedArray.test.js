import isTypedArray from "../../src/isTypedArray";
import { test, expect } from "@jest/globals";

test('empty array is not a typed array', () => {
   expect(isTypedArray([]))
       .toBeDefined()
       .toBe(false);
});

test('uint 8 array is a typed array', () => {
    let array = new Uint8Array([1, 2, 3, 4, 5]);
    expect(isTypedArray(array))
        .toBeDefined()
        .toBe(true);
});

