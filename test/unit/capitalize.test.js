import capitalize from "../../src/capitalize";
import { test, expect } from "@jest/globals";

test('Capitalize FRED', () => {
    expect(capitalize('FRED'))
        .toBeDefined()
        .toBe('Fred');
});

test('Capitalize fred', () => {
    expect(capitalize('fred'))
        .toBeDefined()
        .toBe('Fred');
});

test('Capitalize Fred', () => {
    expect(capitalize('Fred'))
        .toBeDefined()
        .toBe('Fred');
});