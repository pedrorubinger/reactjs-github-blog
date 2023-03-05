import styled from "styled-components"

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const HomeContent = styled.div`
	max-width: 900px;
	width: 100%;

	@media (max-width: 900px) {
		width: 90%;
	}
`

export const CoverLayoutProfileContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: -85px;

	@media (max-width: 900px) {
		margin-top: -2px;
	}
`

export const PostCardsContainer = styled.div`
	margin: 3rem auto;

	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;

	@media (max-width: 690px) {
		grid-template-columns: 1fr;
	}
`
