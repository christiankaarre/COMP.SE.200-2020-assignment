import toInteger from "../src/toInteger";
import { test } from "@jest/globals";

test('number to integer', () => {
    expect(toInteger(3.2))
        .toBeDefined()
        .toBe(3);
});

test('min value to integer', () => {
    expect(toInteger(Number.MIN_VALUE))
        .toBeDefined()
        .toBe(0);
});

test('infinity to integer', () => {
    expect(toInteger(Infinity))
        .toBeDefined()
        .toBe(Number.MAX_VALUE);
});

test('string number to integer', () => {
    expect(toInteger('3.2'))
        .toBeDefined()
        .toBe(3);
});