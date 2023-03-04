import React from "react"

import { getTimePassed } from "~/utils"
import {
	StyledPostCard,
	StyledPostCardBody,
	StyledPostCardHeader,
	StyledPostCardTimeAgo,
	StyledPostCardTitle,
} from "~/components/PostCard/styles"

interface PostCardProps {
	title: string
	publishedAt: Date
	text: string
}

export const PostCard: React.FC<PostCardProps> = ({
	publishedAt,
	title,
	text,
}) => {
	return (
		<StyledPostCard>
			<StyledPostCardHeader>
				<StyledPostCardTitle>{title}</StyledPostCardTitle>

				<StyledPostCardTimeAgo>
					{getTimePassed(publishedAt)}
				</StyledPostCardTimeAgo>
			</StyledPostCardHeader>

			<StyledPostCardBody>{text}</StyledPostCardBody>
		</StyledPostCard>
	)
}
