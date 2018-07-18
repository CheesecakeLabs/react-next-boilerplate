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

  componentDidMount = () => {
    this.applyValidation(this.props.value)
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
    const { className, type, field, multiline, required, value, errorMessage } = this.props
    const visibleError = this.state.errorValidation || errorMessage || null

    return (
      <div className={classNames(styles.field, className)}>
        <Input
          className={className}
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

const validationTypes = [PropTypes.string, PropTypes.arrayOf(PropTypes.string)]
const customValidationTypes = {
  rule: PropTypes.regexp,
  message: PropTypes.string,
}

FormField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  validations: PropTypes.oneOfType(validationTypes),
  customValidations: PropTypes.shape(customValidationTypes),
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
  customValidations: undefined,
  errorMessage: '',
  handleChange: null,
  handleFormValidation: () => {},
}

export default FormField
