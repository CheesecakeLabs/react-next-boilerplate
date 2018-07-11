import PropTypes from 'prop-types'
import React from 'react'
import Input from '_atoms/Input'

const FormField = ({ className, children, field, label, errorMessage, handleChange }) => (
  <div className={className}>
    {children ? children : <label htmlFor={field}>{label}</label>}
    <Input id={field} name={field} handleChange={handleChange}/>
    {errorMessage && <p>{errorMessage}</p>}
  </div>
)

FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  field: PropTypes.string.isRequired,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

FormField.defaultProps = {
  className: undefined,
  children: undefined,
  field: null,
  label: undefined,
  errorMessage: '',
  handleChange: null,
}

export default FormField
