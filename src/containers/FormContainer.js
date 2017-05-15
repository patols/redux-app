import { connect } from 'react-redux'
import { editFormText } from '../actions'
import Form from '../components/Form/Form.jsx'

const mapStateToProps = (state) => {
    return {
        hintText: state.form.hintText,
        text: state.form.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (text) => {
            dispatch(editFormText(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
