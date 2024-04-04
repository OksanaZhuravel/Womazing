import { FormErrors, ValidationRule } from "../types/types"
interface Form {
  [key: string]: string
}

export const validateForm = (
  form: Form,
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
