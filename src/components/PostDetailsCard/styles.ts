import styled from "styled-components"

export const PostDetailsCardContainer = styled.div`
	z-index: 9999;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	padding: 2rem;
	width: 90%;
	max-width: 900px;
`

export const PostMetaDetailsContainer = styled.div`
	z-index: 9999;
	background: ${({ theme }) => theme["base-profile"]};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	border-radius: 10px;

	padding: 2rem;
	width: 90%;
	max-width: 900px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: center;
	}
`

export const PostDetailsHeaderCard = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	width: 100%;

	& > :first-child {
		margin-right: 1rem;
	}
`

export const PostDetailsBodyCard = styled.div`
	margin-top: 1.25rem;
`

export const PostDetailsTitle = styled.h2`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 130%;

	color: ${({ theme }) => theme["base-title"]};
`

export const PostDetailsCardFooter = styled.footer`
	margin-top: 0.5rem;

	display: flex;
	flex-wrap: wrap;
	gap: 0 1.5rem;
`

export const PostDetailsCardFooterInfoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& svg {
		color: ${({ theme }) => theme["base-label"]};
	}
`

export const PostDetailsCardInfoText = styled.span`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 160%;

	color: ${({ theme }) => theme["base-span"]};
`

export const PostDetailsContentContainer = styled.div`
	padding: 2.5em 2rem;
	width: 90%;
	max-width: 900px;

	color: ${({ theme }) => theme["base-text"]};
	font-size: 1rem;
	line-height: 160%;
	font-weight: 400;
	white-space: pre-wrap;

	a {
		color: ${({ theme }) => theme.blue} !important;
		white-space: pre-wrap;
	}

	code {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1rem;
		gap: 0.5rem;

		height: auto;
		white-space: pre-line;
		margin-top: 1.5rem;

		background: ${({ theme }) => theme["base-post"]};
		border-radius: 2px;
	}
`
