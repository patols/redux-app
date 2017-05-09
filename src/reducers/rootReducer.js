import { combineReducers } from 'redux'
import button from './button'
import form from './form'

//combining all reducers in the application
const app = combineReducers({
    button,
    form
})

export default app
