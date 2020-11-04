import isBoolean from "../src/isBoolean";
import { test } from "@jest/globals";

test('boolean is boolean', () => {
   expect(isBoolean(false))
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