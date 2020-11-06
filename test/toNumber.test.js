import toNumber from "../src/toNumber";
import { test } from "@jest/globals";

test('number to number', () => {
    expect(toNumber(3.2))
        .toBeDefined()
        .toBe(3.2);
});

test('min value to number', () => {
    expect(toNumber(Number.MIN_VALUE))
        .toBeDefined()
        .toBe(5e-324);
});

test('infinity to number', () => {
    expect(toNumber(Infinity))
        .toBeDefined()
        .toBe(Infinity);
});

test('string number to number', () => {
    expect(toNumber('3.2'))
        .toBeDefined()
        .toBe(3.2);
});

test('symbol to number', () => {
    expect(toNumber(Symbol("abc")))
        .toBeDefined()
        .toBeNaN();
});

test('number object to number', () => {
    expect(toNumber(new Number(1)))
        .toBeDefined()
        .toBe(1);
});

test('object 0 to number', () => {
    expect(toNumber(new Number(0)))
        .toBeDefined()
        .toBe(0);
});

test('overridden valueOf to number', () => {
    let myNumber = new Number(1);
    myNumber.valueOf = null;
    expect(toNumber(myNumber))
        .toBeDefined()
        .toBe(1);
});

test('binary to number', () => {
    expect(toNumber(0b1010))
        .toBeDefined()
        .toBe(10);
});

test('octal to number', () => {
    expect(toNumber(0o12))
        .toBeDefined()
        .toBe(10);
});

test('hexadecimal to number', () => {
    expect(toNumber(0xA))
        .toBeDefined()
        .toBe(10);
});

test('string to number', () => {
    expect(toNumber("abcdefg"))
        .toBeDefined()
        .toBeNaN();
});

test('binary string to number', () => {
    expect(toNumber('0b1010'))
        .toBeDefined()
        .toBe(10);
});

test('octal string to number', () => {
    expect(toNumber('0o12'))
        .toBeDefined()
        .toBe(10);
});

test('hexadecimal string to number', () => {
    expect(toNumber('0xA'))
        .toBeDefined()
        .toBe(10);
});
