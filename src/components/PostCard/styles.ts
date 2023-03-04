import styled from "styled-components"

export const StyledPostCard = styled.div`
	background: ${({ theme }) => theme["base-post"]};
	border-radius: 10px;
	border: 1px solid transparent;
	padding: 2rem;

	max-width: 26rem;

	cursor: pointer;
	transition: 0.25s;

	&:hover {
		border: 1px solid ${({ theme }) => theme["base-label"]};
	}
`

export const StyledPostCardHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
	gap: 1rem;
`

export const StyledPostCardTitle = styled.h3`
	font-style: normal;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 160%;
	font-family: "Nunito";

	color: ${({ theme }) => theme["base-title"]};
`

export const StyledPostCardTimeAgo = styled.span`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 160%;

	width: fit-content;
	display: block;
	white-space: nowrap;

	color: ${({ theme }) => theme["base-span"]};
`

export const StyledPostCardBody = styled.div`
	margin-top: 1.25rem;

	font-family: "Nunito";
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 160%;

	color: ${({ theme }) => theme["base-text"]};

	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4; /* number of lines to show */
	line-clamp: 4;
	-webkit-box-orient: vertical;
`
