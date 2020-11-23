import toFinite from "../../src/toFinite";
import { test, expect } from "@jest/globals";

test('3.2 to finite', () => {
    let value = 3.2;
    expect(toFinite(value))
        .toBeDefined()
        .toBe(value);
});

test('min value to finite', () => {
    let value = Number.MIN_VALUE;
    expect(toFinite(value))
        .toBeDefined()
        .toBe(5e-324);
});

test('infinity to finite', () => {
    expect(toFinite(Infinity))
        .toBeDefined()
        .toBe(Number.MAX_VALUE);
});

test('-infinity to finite', () => {
    expect(toFinite(-Infinity))
        .toBeDefined()
        .toBe(-Number.MAX_VALUE);
});

test('3.2 string to finite', () => {
    expect(toFinite('3.2'))
        .toBeDefined()
        .toBe(3.2);
});

test('null to finite', () => {
    expect(toFinite(null))
        .toBeDefined()
        .toBe(0);
});

test('0 to finite', () => {
    expect(toFinite(0))
        .toBeDefined()
        .toBe(0);
});

test('symbol to finite', () => {
    expect(toFinite(Symbol(0)))
        .toBeDefined()
        .toBe(0);
});