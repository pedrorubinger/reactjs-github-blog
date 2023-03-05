import React from "react"

import {
	CoverLayoutPostDetailsContainer,
	PostContainer,
} from "~/pages/Post/styles"
import { PostDetailsCard } from "~/components/PostDetailsCard"

interface PostProps {}

export const Post: React.FC<PostProps> = () => {
	return (
		<PostContainer>
			<CoverLayoutPostDetailsContainer>
				<PostDetailsCard
					username="pedrorubinger"
					url="https://github.com/pedrorubinger"
					title="TypeScript data types and data structures"
					content="Programming languages all have built-in data structures, but these often differ from one language to another."
					publishedAt={new Date("2022-12-22T19:44:09")}
					commentsAmmount={1}
				/>
			</CoverLayoutPostDetailsContainer>
		</PostContainer>
	)
}
