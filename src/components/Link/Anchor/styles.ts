import styled from "styled-components"

import { LinkBaseStyles } from "~/components/Link/styles"

export const StyledLink = styled.a`
	${LinkBaseStyles}

	text-decoration: none;

	&:visited {
		color: ${({ theme }) => theme.blue};
	}
`
