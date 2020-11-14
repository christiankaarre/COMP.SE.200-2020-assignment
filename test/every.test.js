import every from "../src/every";
import { test } from "@jest/globals";

test('documented usage of every', () => {
    expect(every([true, 1, null, 'yes'], Boolean))
        .toBeDefined()
        .toBe(false);
});

test('only true as parameter for every', () => {
    expect(every([true], Boolean))
        .toBeDefined()
        .toBe(true);
});

test('everything as string for every', () => {
    expect(every([true, 1, null, 'yes'], String))
        .toBeDefined()
        .toBe(true);
});

test('null as parameter for every', () => {
    expect(every(null, String))
        .toBeDefined()
        .toBe(true);
});