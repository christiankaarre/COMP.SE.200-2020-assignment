import upperFirst from '../src/upperFirst'

test('Check upper', () => {
    expect(upperFirst('sten')).toBe('Sten')
})

test('Check upper', () => {
    expect(upperFirst('STEN')).toBe('STEN')
})
