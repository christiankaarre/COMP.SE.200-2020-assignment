import filter from "../src/filter";
import { test } from "@jest/globals";

test('documented usage for filter', () => {
    const users = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false}
    ]

    expect(filter(users, ({ active }) => active))
        .toBeDefined()
        .toStrictEqual([{'user': 'barney', 'active': true}]);
});

test('null as parameter for filter', () => {
    expect(filter(null, ({ active }) => active))
        .toBeDefined()
        .toStrictEqual([[]]);
});