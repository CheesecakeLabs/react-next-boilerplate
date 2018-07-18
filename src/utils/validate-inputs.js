import validations from './validations'

export default function validateRules({ isRequired, fieldType, fieldRules, customRules }) {
  const reqValidations = { ...validations, ...customRules }

  return function validate(value) {
    if (!isRequired && !value) return null

    const testValidation = (...selected) =>
      selected.find(
        validation => reqValidations[validation] && !reqValidations[validation].rule.test(value)
      )

    const testRequired = isRequired && testValidation('required')
    const testType = fieldType && testValidation(fieldType)
    const firstError = testRequired || testType || testValidation(fieldRules)

    return reqValidations[firstError] ? reqValidations[firstError].message : null
  }
}
