import get from "../../src/get";
import { test, expect } from "@jest/globals";

test('get c from object', () => {
    const object = {'a': [{'b': {'c': 3}}]};
    expect(get(object, 'a[0].b.c'))
        .toBeDefined()
        .toBe(3);
});

test('get c with array from object', () => {
    const object = {'a': [{'b': {'c': 3}}]};
    expect(get(object, ['a', '0', 'b', 'c']))
        .toBeDefined()
        .toBe(3);
});

test('get non existing with default value from object', () => {
    const object = {'a': [{'b': {'c': 3}}]};
    expect(get(object, 'a.b.c', 'default'))
        .toBeDefined()
        .toBe('default');
});

test('get non existing from non existing object', () => {
    expect(get(null, 'a.b.c', 'default'))
        .toBeDefined()
        .toBe('default');
});