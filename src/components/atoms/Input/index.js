import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ className, type, id, name, multiline, required, value, handleChange }) => {
  const props = {
    className,
    id,
    name,
    required,
    value,
    onChange: handleChange
  }
  return multiline ?
    <textarea {...props} /> :
    <input {...props} type={type} />
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  className: undefined,
  type: 'text',
  id: undefined,
  name: undefined,
  multiline: false,
  required: false,
  value: '',
  handleChange: null,
}

export default Input
