import React , { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

require('./Block.scss')

const Form = ({ hintText, text }) => (
    <div className="Block-top">
        <Paper className="Block-top__content">
            <TextField className="Block-top__content__input" hintText={hintText}/><br/>
            <TextField className="Block-top__content__input" hintText={hintText}/><br/>
            <TextField className="Block-top__content__input" hintText={hintText}/><br/>
            <TextField className="Block-top__content__input" hintText={hintText}/><br/>
            <RaisedButton className="Block-top__content__button"
                label={"Decline"}
                secondary={true}>
            </RaisedButton>
            <RaisedButton className="Block-top__content__button"
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
