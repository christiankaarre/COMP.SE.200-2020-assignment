import isBuffer from "../src/isBuffer";
import { test } from "@jest/globals";

test('Allocated Buffer', () => {
    let x = Buffer.alloc(2)
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


