import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
	CoverLayoutProfileContainer,
	HomeContainer,
	HomeContent,
	PostCardsContainer,
} from "~/pages/Home/styles"
import { Post } from "~/interfaces"
import { PostContext } from "~/contexts"
import { ProfileCard } from "~/components/ProfileCard"
import { SearchPosts } from "~/components/SearchPosts"
import { PostCard } from "~/components/PostCard"
import { EmptyPostList } from "~/components/EmptyPostList"
import { PostListSkeleton } from "~/components/ShimmerSkeleton/PostListSkeleton"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const navigate = useNavigate()
	const { posts, isFetchingPosts, fetchPosts, selectPost } =
		useContext(PostContext)

	const [isMounted, setIsMounted] = useState(false)

	const isEmpty = !posts?.length && !isFetchingPosts
	const isFull = !!posts?.length && !isFetchingPosts
	const isLoading = isFetchingPosts || !isMounted

	const onClickPostCard = (post: Post) => {
		selectPost(post)
		navigate(`/post/${post.id}`)
	}

	useEffect(() => {
		void fetchPosts()
		setIsMounted(true)

		return () => {
			setIsMounted(false)
		}
	}, [fetchPosts])

	return (
		<HomeContainer>
			<CoverLayoutProfileContainer>
				<ProfileCard />
			</CoverLayoutProfileContainer>

			<HomeContent>
				<SearchPosts />

				{!!isLoading && <PostListSkeleton />}

				{!!isEmpty && <EmptyPostList />}

				{!!isFull && (
					<PostCardsContainer>
						{posts.map(({ id, ...rest }) => (
							<PostCard
								key={id}
								{...rest}
								onClick={() => onClickPostCard({ id, ...rest })}
							/>
						))}
					</PostCardsContainer>
				)}
			</HomeContent>
		</HomeContainer>
	)
}
