import add from "../src/add";
import ceil from "../src/ceil";
import clamp from "../src/clamp";
import divide from "../src/divide";


test('Add and divide', () => {
    expect(divide(add(5,10), 3)).toBe(5);
});

test('Add, ceil and divide', () => {
    expect(divide(ceil(add(5,9.55)), 3)).toBe(5);
});

test('Divide, clamp and ceil', () => {
    expect(ceil(clamp(divide(50,3), -2.22, 2.22))).toBe(3);
});

test('Divide, clamp and add', () => {
    expect(add(clamp(divide(50,3), -2.22, 2.22), 2.22)).toBe(4.44);
});

test('Ceil, divide and ceil', () => {
    expect(ceil(divide(ceil(44.99999),13))).toBe(4);
});

test('Clamp, divide and ceil', () => {
    expect(clamp(divide(ceil(44.99999),13), 1, 1)).toBe(1);
});
