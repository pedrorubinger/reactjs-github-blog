import React from "react"
import { ArrowSquareUpRight, CaretLeft } from "phosphor-react"

import { LinkSpan, StyledLink } from "~/components/Link/styles"

type LinkElementProps = React.DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>

interface LinkProps extends LinkElementProps {
	text?: string
	/** @default false */
	isGoBackLink?: boolean
}

export const AnchorLink: React.FC<LinkProps> = ({
	text,
	isGoBackLink = false,
	...rest
}) => {
	return (
		<StyledLink {...rest} ref={null}>
			{!!isGoBackLink && <CaretLeft size={14} />}
			<LinkSpan>{text}</LinkSpan>{" "}
			{!isGoBackLink && <ArrowSquareUpRight size={14} />}
		</StyledLink>
	)
}
