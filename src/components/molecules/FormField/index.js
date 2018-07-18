import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import styles from './styles.css'

import Input from '_atoms/Input'

const FormField = ({
  className,
  type,
  field,
  multiline,
  required,
  value,
  validations,
  errorMessage,
  handleChange,
}) => (
  <Fragment>
    <Input
      className={className}
      type={type}
      id={field}
      name={field}
      multiline={multiline}
      required={required}
      value={value}
      handleChange={handleChange}
    />
  {errorMessage && <p className={styles.error}>{errorMessage}</p>}
  </Fragment>
)

const validationTypes = [PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.object]

FormField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  validations: PropTypes.oneOfType(validationTypes),
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleFormValidation: PropTypes.func,
}

FormField.defaultProps = {
  className: undefined,
  type: 'text',
  field: null,
  multiline: false,
  required: false,
  value: '',
  validations: [],
  errorMessage: '',
  handleChange: null,
  handleFormValidation: () => {},
}

export default FormField
