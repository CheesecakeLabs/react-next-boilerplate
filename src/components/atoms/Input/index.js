import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ className, type, required, value, handleChange }) => (
  <input
    className={className}
    type={type}
    required={required}
    value={value}
    onChange={handleChange}
  />
)

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  className: undefined,
  type: 'text',
  required: false,
  value: '',
  handleChange: null,
}

export default Input
