import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames'

import validate from '_utils/validate-inputs'
import Input from '_atoms/Input'

import styles from './styles.css'

class FormField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorValidation: '',
    }
    this.validate = validate({
      isRequired: props.required,
      fieldType: props.type,
      fieldRules: props.validations,
      customRules: props.customValidations,
    })
    this.handleFormValidation = props.handleFormValidation
  }

  applyValidation = value => {
    const validation = this.validate(value)

    this.setState({ errorValidation: validation })
    this.handleFormValidation(this.props.field, !validation)
  }

  handleChange = ev => {
    this.applyValidation(ev.target.value)
    return this.props.handleChange(ev)
  }

  render() {
    const { className, label, type, field, multiline, required, value, errorMessage } = this.props
    const visibleError = this.state.errorValidation || errorMessage || null

    const labelChildren = required && <span>*</span>
    const labelProps = { htmlFor: field }

    const labelComponent =
      label && label.type ? (
        React.cloneElement(label, labelProps, label.props.children, ' ', labelChildren)
      ) : (
        <label htmlFor={field}>
          {label} {labelChildren}
        </label>
      )

    return (
      <div className={classNames(styles.field, className)}>
        {labelComponent}
        <Input
          className={styles.input}
          type={type}
          id={field}
          name={field}
          multiline={multiline}
          required={required}
          value={value}
          handleChange={this.handleChange}
        />
        {visibleError && <p className={styles.error}>{visibleError}</p>}
      </div>
    )
  }
}

const customValidationTypes = {
  rule: PropTypes.instanceOf(RegExp),
  message: PropTypes.string,
}

FormField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  type: PropTypes.string,
  field: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  validations: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  customValidations: PropTypes.arrayOf(PropTypes.shape(customValidationTypes)),
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleFormValidation: PropTypes.func,
}

FormField.defaultProps = {
  className: undefined,
  label: undefined,
  type: 'text',
  field: null,
  multiline: false,
  required: false,
  value: '',
  validations: [],
  customValidations: undefined,
  errorMessage: undefined,
  handleChange: null,
  handleFormValidation: () => {},
}

export default FormField
