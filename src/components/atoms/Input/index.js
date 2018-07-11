import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ className, type, id, name, required, value, handleChange }) => (
  <input
    className={className}
    type={type}
    id={id}
    name={name}
    required={required}
    value={value}
    onChange={handleChange}
  />
)

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  className: undefined,
  type: 'text',
  id: undefined,
  name: undefined,
  required: false,
  value: '',
  handleChange: null,
}

export default Input
