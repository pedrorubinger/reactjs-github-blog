import styled from "styled-components"

export const StyledInput = styled.input`
	box-sizing: border-box;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0.75rem 1rem;
	gap: 0.5rem;

	background: ${({ theme }) => theme["base-input"]};

	border: 1px solid ${({ theme }) => theme["base-border"]};
	border-radius: 6px;

	flex: none;
	order: 0;
	flex-grow: 0;

	font-family: "Nunito";
	font-weight: 400;
	font-size: 1rem;
	line-height: 160%;

	color: ${({ theme }) => theme["base-label"]};

	&:focus {
		color: ${({ theme }) => theme["base-text"]};
		border-color: ${({ theme }) => theme.blue};
	}
`
