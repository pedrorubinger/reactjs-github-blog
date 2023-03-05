import styled from "styled-components"

export const SearchPostsContainer = styled.div`
	margin: 4.5rem auto 0;
`

export const SearchPostsHeader = styled.div`
	display: flex;
	justify-content: space-between;
`

export const SearchPostsTitle = styled.h4`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 700;
	font-size: 1.125rem;
	line-height: 160%;

	color: ${({ theme }) => theme["base-subtitle"]};
`

export const SearchPostsAmount = styled.span`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 160%;

	text-align: right;
	color: ${({ theme }) => theme["base-span"]};
	margin-bottom: 0.75rem;
`
