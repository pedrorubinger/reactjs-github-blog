import styled from "styled-components"

export const EmptyPostListContainer = styled.div`
	width: 100%;
	margin: 3rem auto;
`

export const EmptyPostListText = styled.h4`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 160%;
	text-align: center;

	color: ${({ theme }) => theme["base-title"]};
`
