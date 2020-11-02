import isDate from "../src/isDate";
import {test} from "@jest/globals";

test('date is date', () => {
    let date = new Date;
    expect(isDate(date)).toBeDefined();
    expect(isDate(date)).toBe(true);
});

test('number is not date', () => {
    let number = Number(5);
    expect(isDate(number)).toBeDefined();
    expect(isDate(number)).toBe(false);
});

test('string is not date', () => {
    let string = String("test string");
    expect(isDate(string)).toBeDefined();
    expect(isDate(string)).toBe(false);
})

test('boolean is not date', () => {
    let boolean = Boolean(true);
    expect(isDate(boolean)).toBeDefined();
    expect(isDate(boolean)).toBe(false);
})