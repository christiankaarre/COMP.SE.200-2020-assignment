import isBuffer from "../src/isBuffer";
//import root from "../src/.internal/root";
//var isBuffer = require('../src/isBuffer');

test('true buffer', () => {
    var x = Buffer.alloc(2)//Buffer.from('abc');
    // expect(Buffer.isBuffer(x))
    //     .toBe(true);
    expect(isBuffer(x))
        .toBe(true);
});

test('false buffer', () => {
    var x = new Uint8Array(2)
    expect(isBuffer(x))
        .toBe(false);
});


