import styled from "styled-components"

export const StyledProfileCard = styled.div`
	z-index: 9999;
	background: ${({ theme }) => theme["base-profile"]};
	border-radius: 10px;
	border: 1px solid transparent;
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

	padding: 2rem;
	max-width: 900px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 2rem;

	@media (max-width: 900px) {
		border-radius: 0;
		width: 100%;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: center;
	}
`

export const ProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`

export const ProfileImage = styled.img`
	width: 148px;
	height: 148px;
	border-radius: 8px;
`

export const ProfileContentHeader = styled.header`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	width: 100%;
`

export const ProfileName = styled.h2`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 700;
	font-size: 1.5rem;
	line-height: 130%;

	margin-right: 1rem;
	color: ${({ theme }) => theme["base-title"]};
`

export const ProfileContentBody = styled.div`
	margin-top: 0.5rem;
	width: 100%;
`

export const ProfileBio = styled.div`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 160%;

	color: ${({ theme }) => theme["base-text"]};
`

export const ProfileContentFooter = styled.footer`
	margin-top: 1.5rem;

	display: flex;
	flex-wrap: wrap;
	gap: 0 1.5rem;
	flex: 1;
	align-items: flex-end;
`

export const ProfileContentFooterInfoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& svg {
		color: ${({ theme }) => theme["base-label"]};
	}
`

export const ProfileContentInfoText = styled.span`
	font-family: "Nunito";
	font-style: normal;
	font-weight: 400;
	font-size: 1rem;
	line-height: 160%;

	color: ${({ theme }) => theme["base-subtitle"]};
`
