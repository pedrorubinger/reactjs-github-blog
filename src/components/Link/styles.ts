import styled from "styled-components"

export const StyledLink = styled.a`
	font-family: "Nunito", sans-serif;
	font-size: 0.75rem;
	font-weight: 700;
	line-height: 160%;

	text-transform: uppercase;
	text-decoration: none;

	color: ${({ theme }) => theme.blue};
	width: fit-content;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 0.5rem;

	transition: 0.25s;

	& svg {
		color: ${({ theme }) => theme.blue};
	}

	&:visited {
		color: ${({ theme }) => theme.blue};
	}

	&:hover {
		color: ${({ theme }) => theme.blue};
		border-bottom: 1px solid ${({ theme }) => theme.blue};
	}
`

export const LinkSpan = styled.span``
