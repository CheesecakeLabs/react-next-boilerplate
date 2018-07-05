import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
