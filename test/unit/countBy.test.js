import countBy from "../../src/countBy";
import { test, expect } from "@jest/globals";

test('documented countBy', () => {
    const users = [
        {'user': 'barney', 'active': true},
        {'user': 'betty', 'active': true},
        {'user': 'fred', 'active': false}
    ]

    expect(countBy(users, value => value.active))
        .toBeDefined()
        .toStrictEqual({'true': 2, 'false': 1});
});