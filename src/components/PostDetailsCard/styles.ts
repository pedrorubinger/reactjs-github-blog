import styled from "styled-components"

export const PostDetailsCardContainer = styled.div`
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
