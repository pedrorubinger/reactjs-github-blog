import React from "react"

import {
	EmptyPostListContainer,
	EmptyPostListText,
} from "~/components/EmptyPostList/styles"

interface EmptyPostListProps {}

export const EmptyPostList: React.FC<EmptyPostListProps> = () => {
	return (
		<EmptyPostListContainer>
			<EmptyPostListText>
				Parece que ainda não há nenhuma publicação deste usuário.
			</EmptyPostListText>
		</EmptyPostListContainer>
	)
}
