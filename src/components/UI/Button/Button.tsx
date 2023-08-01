import { ReactNode } from "react";

interface ButtonProps {
	className: string;
	children: ReactNode;
	onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
	return (
		<button onClick={onClick} className={className}>{children}</button>
	);
}
export default Button;