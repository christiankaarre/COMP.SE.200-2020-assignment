import isArguments from "../src/isArguments";
import { test } from "@jest/globals";

test('documented usage', () => {
    expect(isArguments(function() {return arguments}()))
        .toBeDefined()
        .toBe(true);
});

test('number is not arguments', () => {
    let number = Number(5);
    expect(isArguments(number))
        .toBeDefined()
        .toBe(false);
});

test('string is not arguments', () => {
    let string = String("test string");
    expect(isArguments(string))
        .toBeDefined()
        .toBe(false);
})

test('boolean is not arguments', () => {
    let boolean = Boolean(true);
    expect(isArguments(boolean))
        .toBeDefined()
        .toBe(false);
})

test('array is not arguments', () => {
    let array = Array([1, 2, 3, 4, 5]);
    expect(isArguments(array))
        .toBeDefined()
        .toBe(false);
})