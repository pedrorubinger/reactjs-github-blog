import React from "react"

import {
	SearchPostsAmount,
	SearchPostsContainer,
	SearchPostsHeader,
	SearchPostsTitle,
} from "~/components/SearchPosts/styles"
import { Input } from "~/components/Input"

interface SearchPostsProps {
	amount: number
}

export const SearchPosts: React.FC<SearchPostsProps> = ({ amount = 0 }) => {
	const postsAmountLabel = amount === 1 ? "publicação" : "publicações"

	return (
		<SearchPostsContainer>
			<SearchPostsHeader>
				<SearchPostsTitle>Publicações</SearchPostsTitle>
				<SearchPostsAmount>
					{amount} {postsAmountLabel}
				</SearchPostsAmount>
			</SearchPostsHeader>

			<Input placeholder="Buscar conteúdo" type="text" />
		</SearchPostsContainer>
	)
}
