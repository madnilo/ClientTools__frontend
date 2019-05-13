import types from './types'

const genericState = {
    success: false,
    loading: true,
    data: null,
}

export const partsReducer = (state = genericState, action) => {
    switch (action.type) {
        case types.GET_PARTS_REQUEST:
            return { success: false, loading: true, data: null }
        case types.GET_PARTS_RESPONSE:
            return { success: !!action.data.length, loading: false, data: action.data }
        default:
            return state
    }
}
