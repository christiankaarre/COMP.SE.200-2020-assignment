import filter from '../../src/filter'
import { test, expect } from "@jest/globals";

test('Filter over array', () => {
    const users = [{ 'user': 'barney', 'active': true }, { 'user': 'fred',   'active': false }]
    expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'active': true, 'user': 'barney' }])
})

test('Filter over null array', () => {
    const users = null
    expect(filter(users, ({ active }) => active)).toStrictEqual([[ ]])
})
