import camelCase from "../../src/camelCase";
import { test, expect } from "@jest/globals";

test('Foo Bar to camel case', () => {
    expect(camelCase('Foo Bar'))
        .toBeDefined()
        .toBe('fooBar');
});

test('--foo-bar-- to camel case', () => {
    expect(camelCase('--foo-bar--'))
        .toBeDefined()
        .toBe('fooBar');
});

test('__FOO_BAR__ to camel case', () => {
    expect(camelCase('__FOO_BAR__'))
        .toBeDefined()
        .toBe('fooBar');
});