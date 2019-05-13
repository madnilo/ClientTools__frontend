import types from './types'

const getPartsStart = () => ({
    type: types.GET_PARTS_REQUEST,
})

const getPartsFinish = (data) => ({
    type: types.GET_PARTS_RESPONSE,
    data
})

const getPartDetailsStart = () => ({
    type: types.GET_PART_DETAILS_REQUEST,
})

const getPartDetailsFinish = (data) => ({
    type: types.GET_PART_DETAILS_RESPONSE,
    data
})

export default {
    getPartsStart,
    getPartsFinish,
    getPartDetailsStart,
    getPartDetailsFinish,

}
