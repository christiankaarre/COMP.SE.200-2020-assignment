import keys from "../../src/keys";
import { test, expect } from "@jest/globals";

test('documented usage for keys', () => {
    function Foo() {
        this.a = 1
        this.b = 2
    }

    Foo.prototype.c = 3

    expect(keys(new Foo))
        .toBeDefined()
        .toStrictEqual(['a', 'b']);
});

test('string as parameter for keys', () => {
    expect(keys('hi'))
        .toBeDefined()
        .toStrictEqual(['0', '1']);
});