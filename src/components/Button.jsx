import React , { PropTypes } from 'react'

// A component returning a button displaying a value that increases on click
const Button = ({ onClick, value }) => (
    <div className="button-component-top">
        <button className="button-component-top__button"
            onClick={() => onClick()}>
            {value}
        </button>
    </div>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

export default Button
