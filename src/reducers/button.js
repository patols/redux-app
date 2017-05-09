import { INCREASE_BUTTON_VALUE } from '../actions'

const initialState = {
    buttonValue: 0
}

//definitions for all actions connected to myButton
export default function button(state = initialState, action) {
    switch (action.type) {
        case INCREASE_BUTTON_VALUE:
            return Object.assign({}, state, {
                buttonValue: state.buttonValue + 1
            })
        default:
            return state
    }
}
