import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { vale: state.value + 1 }
        case DECREMENT:
            return { vale: state.value - 1 }
        default:
            return state
    }
}