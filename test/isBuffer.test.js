import isBuffer from "../src/isBuffer";
import { test } from "@jest/globals";

// Check that this is fixed!
test('buffer is buffer', () => {
    expect(isBuffer(new Buffer(2)))
        .toBeDefined()
        .toBe(true);
});

test('uint8 array is not buffer', () => {
   expect(isBuffer(new Uint8Array(2)))
       .toBeDefined()
       .toBe(false);
});