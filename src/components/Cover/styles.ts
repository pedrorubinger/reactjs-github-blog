import styled from "styled-components"

export const CoverContainer = styled.div`
	background: ${({ theme }) => theme["base-profile"]};
	width: 100%;
	height: 296px;

	top: 0;
`

export const CoverLogoImageContainer = styled.div`
	padding-top: 4rem;
`

export const CoverLogoImage = styled.img`
	width: 148px;
	height: 96px;

	margin: auto;
	display: block;
`

export const CoverLeftEffectContainer = styled.div`
	padding: 4.375rem 0 2.375rem 0;
	position: absolute;
`

export const CoverRightEffectContainer = styled.div`
	padding: 1.875rem 0.125rem 1.875rem 0;
	position: absolute;
	right: 0;
	z-index: 99;
`

export const CoverRightEffectEllipse = styled.div`
	position: fixed;
	width: 50%;
	height: 55.25px;
	right: -25.43px;
	top: 170.14px;

	background: ${({ theme }) => theme["blue-500"]};
	filter: blur(84px);
`

export const CoverLeftEffectEllipse = styled.div`
	position: fixed;
	width: 50%;
	height: 55.25px;
	left: -25.43px;
	top: 170.14px;

	background: ${({ theme }) => theme["blue-500"]};
	filter: blur(84px);
`
