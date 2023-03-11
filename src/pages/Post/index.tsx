import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { PostContext } from "~/contexts"
import {
	CoverLayoutPostDetailsContainer,
	PostContainer,
} from "~/pages/Post/styles"
import { PostDetailsCard } from "~/components/PostDetailsCard"

interface PostProps {}

export const Post: React.FC<PostProps> = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { selectedPost } = useContext(PostContext)

	/** TO DO
	 *  ------------------------------------------------------------------
	 * 	If 'selectedPost' is null, attempt to retrieve a post based on the
	 *  route id parameter. If the post does not exist,
	 * 	display an appropriate message.	*/
	useEffect(() => {
		if (!selectedPost) navigate("/")
	}, [selectedPost])

	if (!selectedPost) return null

	return (
		<PostContainer>
			<CoverLayoutPostDetailsContainer>
				<PostDetailsCard
					username="pedrorubinger"
					url="https://github.com/pedrorubinger"
					title={selectedPost.title}
					content={selectedPost.text}
					commentsAmmount={selectedPost.commentsAmount}
					publishedAt={new Date(selectedPost.publishedAt)}
				/>
			</CoverLayoutPostDetailsContainer>
		</PostContainer>
	)
}
