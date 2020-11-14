import map from "../src/map";
import { test } from "@jest/globals";

test('documented usage for map', () => {
   function square(n) {
       return n * n
   }

   expect(map([4, 8], square))
       .toBeDefined()
       .toStrictEqual([16, 64]);
});

test('null as array for map', () => {
    function square(n) {
        return n * n
    }

    expect(map(null, square))
        .toBeDefined()
        .toStrictEqual([]);
})