import maskPartNo from './maskPartNo'

describe('part number mask suite', () => {

    it('adds hifen after 4 letter', () => {
        const unmasked = "1234abcd";
        const expected = "1234-abcd"
        
        const actual = maskPartNo(unmasked, "")

        expect(actual).toEqual(expected)
    })
})