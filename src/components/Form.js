import React , { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const Form = ({ hintText, text }) => (
    <div className="form-top">
        <div className="form-top__content">
            <TextField className="form-top__input-field" hintText={hintText}/>
            <TextField className="form-top__input-field" hintText={hintText}/>
        </div>>
    </div>
);

Form.propTypes = {
    hintText: PropTypes.string.isRequired
}

export default Form
