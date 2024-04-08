import { FormErrors, ValidationRule } from "../types/types"

export const validateForm = (
  form: any,
  validationRules: ValidationRule[],
): FormErrors => {
  const errors: FormErrors = {}

  validationRules.forEach((rule) => {
    const { fields, condition, errorMessage } = rule

    fields.forEach((field) => {
      if (!condition(form[field].trim())) {
        errors[field] = errorMessage
      }
    })
  })

  return errors
}
