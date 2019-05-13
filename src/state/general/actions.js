import types from './types'

const getPartsStart = () => ({
    type: types.GET_PARTS_REQUEST,
})

const getPartsFinish = (data) => ({
    type: types.GET_PARTS_RESPONSE,
    data
})

export default {
    getPartsStart,
    getPartsFinish,

}
