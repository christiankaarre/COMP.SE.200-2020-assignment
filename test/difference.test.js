import difference from "../src/difference";
import { test } from "@jest/globals";

test('documented usage for difference', () => {
   expect(difference([2, 1], [2, 3]))
       .toBeDefined()
       .toStrictEqual([1]);
});

test('string as parameter for difference', () => {
   expect(difference('abc', 'bc'))
       .toBeDefined()
       .toStrictEqual([]);
});