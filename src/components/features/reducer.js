import * as actionTypes from "./action_types"

const initialState = {
    count: 0
}

export const reducer=(state = initialState, action) => {
    switch (actionTypes) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state

    }

}