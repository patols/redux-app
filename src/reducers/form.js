
const initialState = {
    hintText: "Type something",
    text: ""
}

//definitions for all actions connected to myButton
export default function form(state = initialState, action) {
    switch (action.type) {

        case 'UPDATE_TEXT':
            return {...state, text: action.text}
        default:
            return state
    }
}
