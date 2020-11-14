import castArray from "../src/castArray";
import { test } from "@jest/globals";

test('Number cast into array', () => {
    expect(castArray(Number(1)))
        .toBeDefined()
        .toStrictEqual([1]);
});

test('Object cast into array', () => {
    expect(castArray({'a': 1}))
        .toBeDefined()
        .toStrictEqual([{'a':1}]);
});

test('String cast into array', () => {
    expect(castArray('abc'))
        .toBeDefined()
        .toStrictEqual(['abc']);
});

test('Null cast into array', () => {
    expect(castArray(null))
        .toBeDefined()
        .toStrictEqual([null]);
});

test('Undefined cast into array', () => {
    expect(castArray(undefined))
        .toBeDefined()
        .toStrictEqual([undefined]);
});

test('Empty cast into array', () => {
    expect(castArray())
        .toBeDefined()
        .toStrictEqual([]);
});

test('Array cast into array', () => {
    const array = [1, 2, 3];
    expect(castArray(array))
        .toBeDefined()
        .toStrictEqual(array);
});