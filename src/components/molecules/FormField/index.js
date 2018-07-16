import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import validate from '_utils/validate-inputs'
import Input from '_atoms/Input'

import styles from './styles.css'

class FormField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorValidation: '',
    }
    this.validate = validate(props.validations, props.customValidations)
  }

  componentDidMount = () => {
    this.applyValidation(this.props.value)
  }

  applyValidation = value => {
    this.setState({
      errorValidation: this.validate(value),
    })
  }

  handleChange = ev => {
    this.applyValidation(ev.target.value)
    return this.props.handleChange(ev)
  }

  render() {
    const { className, type, field, multiline, required, value, errorMessage } = this.props
    const visibleError = this.state.errorValidation || errorMessage || null

    return (
      <Fragment>
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
      </Fragment>
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
}

export default FormField
