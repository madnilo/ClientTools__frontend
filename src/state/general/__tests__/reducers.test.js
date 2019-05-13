import { partsReducer, partDetailsReducer } from '../reducers'
import actions from '../actions'

describe('test suite for reducers', () => {
    it('works for getPartsStart action', () => {
        const result = partsReducer(null, actions.getPartsStart())

        const expected = {
            loading: true,
            success: false,
            data: null
        }

        expect(result).toStrictEqual(expected)
    })

    it('works for getPartsFinish action with no data', () => {
        const data = []

        const result = partsReducer(null, actions.getPartsFinish(data))

        const expected = {
            loading: false,
            success: false,
            data
        }

        expect(result).toStrictEqual(expected)
    })

    it('works for getPartsFinish action with data', () => {
        const data = [1, 2, 3]

        const result = partsReducer(null, actions.getPartsFinish(data))

        const expected = {
            loading: false,
            success: true,
            data
        }

        expect(result).toStrictEqual(expected)
    })

    it('works for getPartDetailsStart action', () => {
        const result = partDetailsReducer(null, actions.getPartDetailsStart())

        const expected = {
            loading: true,
            success: false,
            data: null
        }

        expect(result).toStrictEqual(expected)
    })

    it('works for getPartDetailsFinish action with no data', () => {
        const data = []

        const result = partDetailsReducer(null, actions.getPartDetailsFinish(data))

        const expected = {
            loading: false,
            success: false,
            data
        }

        expect(result).toStrictEqual(expected)
    })

    it('works for getPartDetailsFinish action with data', () => {
        const data = [1, 2, 3]

        const result = partDetailsReducer(null, actions.getPartDetailsFinish(data))

        const expected = {
            loading: false,
            success: true,
            data
        }

        expect(result).toStrictEqual(expected)
    })
})