import React from "react"

import { HomeContainer } from "~/pages/Home/styles"
import { SearchPosts } from "~/components/SearchPosts"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<HomeContainer>
			<SearchPosts amount={6} />
		</HomeContainer>
	)
}
