import reduce from '../../src/reduce'
import { test, expect } from "@jest/globals";

test('Reduce example', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3)
})

test('Invalid array (object)', () => {
    expect(reduce({}, (sum, n) => sum + n, 0)).toBe(0)
})
