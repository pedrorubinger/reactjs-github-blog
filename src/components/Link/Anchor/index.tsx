import React from "react"
import { ArrowSquareUpRight } from "phosphor-react"

import { StyledLink } from "~/components/Link/Anchor/styles"
import { LinkSpan } from "~/components/Link/styles"

type LinkElementProps = React.DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>

interface LinkProps extends LinkElementProps {
	text?: string
}

export const AnchorLink: React.FC<LinkProps> = ({ text, ...rest }) => {
	return (
		<StyledLink {...rest} ref={null}>
			<LinkSpan>{text}</LinkSpan>
			<ArrowSquareUpRight size={14} />
		</StyledLink>
	)
}
