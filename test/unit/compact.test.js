import compact from "../../src/compact";
import { test, expect } from "@jest/globals";

test('compact documented array', () => {
    expect(compact([0, 1, false, 2, '', 3]))
        .toBeDefined()
        .toStrictEqual([1, 2, 3]);
});