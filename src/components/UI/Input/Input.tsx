import { Ref, forwardRef } from "react"
import { InputProps } from "../../../types/types"

const Input = forwardRef(function Input(
  { className, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  return <input {...rest} ref={ref} className={className} />
})

export default Input
