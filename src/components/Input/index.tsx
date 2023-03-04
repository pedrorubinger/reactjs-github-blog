import React, { forwardRef } from "react"

import { StyledInput } from "~/components/Input/styles"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = forwardRef(
	({ ...rest }, ref: React.ForwardedRef<HTMLInputElement>) => {
		return <StyledInput ref={ref} {...rest} />
	}
)
