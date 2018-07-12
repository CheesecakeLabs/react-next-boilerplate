import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
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
  handleChange
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
    {errorMessage && <p>{errorMessage}</p>}
  </Fragment>
)

FormField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  validations: PropTypes.array,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
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
}

export default FormField
