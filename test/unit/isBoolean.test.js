import isBoolean from "../../src/isBoolean";
import { test, expect } from "@jest/globals";

test('false is boolean', () => {
   expect(isBoolean(false))
       .toBeDefined()
       .toBe(true);
});

test('true is boolean', () => {
    expect(isBoolean(true))
        .toBeDefined()
        .toBe(true);
});

test('boolean object is boolean', () => {
    expect(isBoolean(new Boolean(true)))
        .toBeDefined()
        .toBe(true);
});

test('null is not boolean', () => {
    expect(isBoolean(null))
        .toBeDefined()
        .toBe(false);
});

test('number is not boolean', () => {
    let number = Number(0);
    expect(isBoolean(number))
        .toBeDefined()
        .toBe(false);
});

test('string is not boolean', () => {
    let string = String("false");
    expect(isBoolean(string))
        .toBeDefined()
        .toBe(false);
});