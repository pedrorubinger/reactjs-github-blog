import React from "react"

import { getTimePassed } from "~/utils"
import {
	StyledCard,
	StyledCardBody,
	StyledCardHeader,
	StyledCardTimeAgo,
	StyledCardTitle,
} from "~/components/Card/styles"

interface CardProps {
	title: string
	publishedAt: Date
	text: string
}

export const Card: React.FC<CardProps> = ({ publishedAt, title, text }) => {
	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardTitle>{title}</StyledCardTitle>

				<StyledCardTimeAgo>{getTimePassed(publishedAt)}</StyledCardTimeAgo>
			</StyledCardHeader>

			<StyledCardBody>{text}</StyledCardBody>
		</StyledCard>
	)
}
