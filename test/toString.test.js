import toString from "../src/toString";
import { test } from "@jest/globals";

test('null to string', () => {
    expect(toString(null))
        .toBeDefined()
        .toBe('');
});
