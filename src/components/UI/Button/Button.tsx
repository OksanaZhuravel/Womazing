import { ButtonProps } from "../../../types/types"

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
export default Button
