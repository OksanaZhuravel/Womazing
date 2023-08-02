import React, { InputHTMLAttributes, forwardRef, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}
const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ className, ...rest },
	ref: Ref<HTMLInputElement>
) => {
	return <input {...rest} ref={ref} className={className} />;
};

export default forwardRef(Input);
