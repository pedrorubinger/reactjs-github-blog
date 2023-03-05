import React from "react"

import { getTimePassed } from "~/utils"
import {
	StyledPostCard,
	StyledPostCardBody,
	StyledPostCardHeader,
	StyledPostCardTimeAgo,
	StyledPostCardTitle,
} from "~/components/PostCard/styles"

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string
	publishedAt: Date
	text: string
}

export const PostCard: React.FC<PostCardProps> = ({
	publishedAt,
	title,
	text,
	...rest
}) => {
	return (
		<StyledPostCard {...rest}>
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
