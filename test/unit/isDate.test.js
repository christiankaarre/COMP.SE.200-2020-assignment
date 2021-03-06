import isDate from "../../src/isDate";
import { test, expect } from "@jest/globals";

test('date is date', () => {
    let date = new Date;
    expect(isDate(date))
        .toBeDefined()
        .toBe(true);
});

test('number is not date', () => {
    let number = Number(5);
    expect(isDate(number))
        .toBeDefined()
        .toBe(false);
});

test('string is not date', () => {
    let string = String('Mon April 23 2012');
    expect(isDate(string))
        .toBeDefined()
        .toBe(false);
})

test('boolean is not date', () => {
    let boolean = Boolean(true);
    expect(isDate(boolean))
        .toBeDefined()
        .toBe(false);
})