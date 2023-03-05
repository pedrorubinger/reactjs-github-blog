import styled from "styled-components"

export const PostListSkeletonContainer = styled.div`
	margin: 3rem auto;
`

export const PostListSkeletonContent = styled.div`
	display: grid;
	grid-template-columns: 2fr 2fr;
	width: 100%;
	gap: 15%;
	margin-bottom: 15px;
`

export const PostListSkeletonRow = styled.div`
	display: grid;
	grid-template-columns: 48% 48%;
	width: 100%;
	gap: 4%;
`

export const PostListSkeletonCard = styled.div`
	background: ${({ theme }) => theme["base-post"]};

	border-radius: 10px;
	border: 1px solid transparent;
	padding: 2rem;

	width: 100%;
`

export const PostListSkeletonCardHeader = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	gap: 5%;

	margin-bottom: 1.25rem;
`
