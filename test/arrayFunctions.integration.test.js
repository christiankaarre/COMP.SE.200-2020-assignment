import at from "../src/at";
import drop from "../src/drop";
import slice from "../src/slice";
import chunk from "../src/chunk";

test('Drop and chunk', () => {
    const array = ['a', 'b', 'c']
    expect(chunk(drop(array), 1)).toStrictEqual([['b'],['c']]);
});

test('Drop and slice', () => {
    const array = ['a', 'b', 'c']
    expect(slice(drop(array), 1)).toStrictEqual(['c']);
});

test('Drop and at', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(drop(at(object, ['a[0].b.c', 'a[1]']))).toStrictEqual([4])
});
