import React , { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

require('./Form.scss')

const Form = ({ hintText, text }) => (
    <div className="form-top">
        <Paper className="form-top__content">
            <TextField className="form-top__content__input" hintText={hintText}/><br/>
            <TextField className="form-top__content__input" hintText={hintText}/><br/>
            <TextField className="form-top__content__input" hintText={hintText}/><br/>
            <TextField className="form-top__content__input" hintText={hintText}/><br/>
            <RaisedButton className="form-top__content__button"
                label={"Decline"}
                secondary={true}>
            </RaisedButton>
            <RaisedButton className="form-top__content__button"
                label={"Accept"}
                primary={true}>
            </RaisedButton>
        </Paper>
    </div>
);

Form.propTypes = {
    hintText: PropTypes.string.isRequired
}

export default Form
