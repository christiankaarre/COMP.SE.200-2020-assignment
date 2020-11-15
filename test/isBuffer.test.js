import isBuffer from "../src/isBuffer";
import { test } from "@jest/globals";

test('Allocated Buffer', () => {
    let x = Buffer.alloc(2)
    expect(isBuffer(x))
        .toBeDefined()
        .toBe(true);
});

test('Allocated Uint8Array Buffer', () => {
    let x = new Buffer(new Uint8Array(2))
    expect(isBuffer(x))
        .toBeDefined()
        .toBe(true);
});

test('Allocated allocUnsafe', () => {
    let x = Buffer.allocUnsafe(10)
    expect(isBuffer(x))
        .toBeDefined()
        .toBe(true);
});

test('Allocated Uint8Array', () => {
    let x = new Uint8Array(2)
    expect(isBuffer(x))
        .toBeDefined()
        .toBe(false);
});

test('Allocated unfedined variable', () => {
    let x = undefined
    expect(isBuffer(x))
        .toBeDefined()
        .toBe(false);
});




