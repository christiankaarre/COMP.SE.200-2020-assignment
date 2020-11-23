import isBuffer from "../../src/isBuffer";
import { test, expect } from "@jest/globals";
import { Buffer } from "buffer";

test('Allocated Buffer', () => {
    let x = Buffer.alloc(2)
    expect(isBuffer(x))
        .toBeDefined()
        .toBe(true);
});

test('Allocated Uint8Array Buffer', () => {
    let x = Buffer.alloc(5, new Uint8Array(2))
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




