import React , { PropTypes } from 'react'


require('./Form/Block.scss')

// A component returning a button displaying a value that increases on click
const Slider = ({ onClick, value }) => (
    <div className="Block-top">
      <div className="Block-top__content">
        <Slider defaultValue={0.5} />
      </div>
    </div>
);

export default Slider
