import React from "react"
import { CaretLeft } from "phosphor-react"

import { LinkSpan } from "~/components/Link/styles"
import { StyledLinkButton } from "~/components/Link/Button/styles"

type ButtonElementProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

interface LinkButtonProps extends ButtonElementProps {
	text?: string
}

export const ButtonLink: React.FC<LinkButtonProps> = ({ text, ...rest }) => {
	return (
		<>
			<StyledLinkButton {...rest} ref={null}>
				<CaretLeft size={14} />
				<LinkSpan>{text}</LinkSpan>
			</StyledLinkButton>
		</>
	)
}
