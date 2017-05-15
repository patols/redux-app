import React , { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

// A component returning a button displaying a value that increases on click
const Button = ({ onClick, value }) => (
    <div className="Button-component-top">
        <RaisedButton className="Button-component-top__button"
            onTouchTap={() => onClick()}
            label={value}
            primary={true}>
        </RaisedButton>
    </div>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default Button
