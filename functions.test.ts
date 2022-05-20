const {shuffleArray} = require('./utils')

describe('shuffleArray tests', () => {
    test('Shuffle array should return a same name', () => {
        expect(shuffleArray(["bob", "wade", "mark"])).toContain('bob' && 'wade' && 'mark')
    })
    test('Shuffle array should return the same array length', () => {
        expect(shuffleArray(["bob", "wade", "mark"])).toHaveLength(3)
    })
    test('shuffleArray should return the same array in a different order', () => {
        expect(shuffleArray(["bob", "wade", "mark"])).not.toEqual(['bob', 'wade', 'mark'])
    })
})