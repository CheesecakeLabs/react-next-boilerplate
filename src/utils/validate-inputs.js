import validations from './validations'

export default function validateRules(selectedValidations, ...newValidations) {
  const reqValidations = { ...validations, ...newValidations }

  return function validate(value) {
    const firstError = selectedValidations.find(
      validation => !reqValidations[validation].rule.test(value)
    )
    return reqValidations[firstError] ? reqValidations[firstError].message : undefined
  }
}
