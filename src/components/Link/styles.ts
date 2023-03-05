import styled, { css } from "styled-components"

export const LinkBaseStyles = css`
	font-family: "Nunito", sans-serif;
	font-size: 0.75rem;
	font-weight: 700;
	line-height: 160%;

	text-transform: uppercase;
	color: ${({ theme }) => theme.blue};

	display: block;
	width: fit-content;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 0.5rem;

	border-bottom: 1px solid transparent;
	transition: 0.25s;

	& svg {
		color: ${({ theme }) => theme.blue};
	}

	&:hover {
		color: ${({ theme }) => theme.blue};
		border-bottom: 1px solid ${({ theme }) => theme.blue};
	}
`

export const LinkSpan = styled.span``
