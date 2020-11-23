import upperFirst from '../../src/upperFirst'
import { test, expect } from "@jest/globals";

test('Check upper', () => {
    expect(upperFirst('sten')).toBe('Sten')
})

test('Check upper', () => {
    expect(upperFirst('STEN')).toBe('STEN')
})
