import validations from './validations'

export default function validateRules(selectedValidations, ...newValidations) {
  const reqValidations = { ...validations, ...newValidations }

  return function validate(value) {
    if (!value && selectedValidations.indexOf('required') < 0) return undefined

    const firstError = selectedValidations.find(
      validation => !reqValidations[validation].rule.test(value)
    )
    return reqValidations[firstError] ? reqValidations[firstError].message : undefined
  }
}
