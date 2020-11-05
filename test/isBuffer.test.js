import isBuffer from "../src/isBuffer";

test('Allocated Buffer', () => {
    var x = Buffer.alloc(2)
    expect(isBuffer(x))
        .toBe(true);
});

test('Allocated Uint8Array', () => {
    var x = new Uint8Array(2)
    expect(isBuffer(x))
        .toBe(false);
});


