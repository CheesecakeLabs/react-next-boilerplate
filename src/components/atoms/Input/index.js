import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const Input = ({
  className,
  type,
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
  return multiline ? <textarea {...props} /> : <input {...props} type={type} />
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
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
  placeholder: undefined,
  multiline: false,
  required: false,
  value: '',
  handleChange: null,
}

export default Input
