import { connect } from 'react-redux'
import { increaseValue } from '../actions'
import Button from '../components/Button.jsx'

const mapStateToProps = (state) => {
    return {
        value: state.button.buttonValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(increaseValue())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
