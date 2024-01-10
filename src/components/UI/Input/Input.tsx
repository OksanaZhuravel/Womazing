import React, { forwardRef, Ref } from "react";
import { InputProps } from "../../../types/types";

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ className, ...rest },
	ref: Ref<HTMLInputElement>
) => {
	return <input {...rest} ref={ref} className={className} />;
};

export default forwardRef(Input);
