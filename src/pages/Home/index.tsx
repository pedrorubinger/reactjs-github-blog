import React from "react"

import { SearchPosts } from "~/components/SearchPosts"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<div>
			<SearchPosts amount={6} />
		</div>
	)
}
