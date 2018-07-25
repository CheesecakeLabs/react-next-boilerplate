import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const Input = ({
  className,
  type,
  checked,
  id,
  name,
  multiline,
  placeholder,
  required,
  value,
  handleChange,
}) => {
  const props = {
    className: classNames(styles.input, className),
    id,
    name,
    placeholder,
    required,
    value,
    onChange: handleChange,
  }
  return multiline ? <textarea {...props} /> : <input {...props} type={type} checked={checked} />
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  className: undefined,
  type: 'text',
  checked: false,
  id: undefined,
  name: undefined,
  placeholder: undefined,
  multiline: false,
  required: false,
  value: '',
  handleChange: null,
}

export default Input
