import React from "react"
import { CalendarBlank, ChatCentered, GithubLogo } from "phosphor-react"

import { getTimePassed } from "~/utils"
import { AnchorLink } from "~/components/Link"
import {
	PostDetailsCardFooter,
	PostDetailsCardFooterInfoBox,
	PostDetailsCardInfoText,
	PostDetailsCardContainer,
	PostDetailsHeaderCard,
	PostDetailsBodyCard,
	PostDetailsTitle,
} from "~/components/PostDetailsCard/styles"

interface PostDetailsCardProps {
	url: string
	username: string
	publishedAt: Date
	title: string
	content: string
	commentsAmmount: number
}

export const PostDetailsCard: React.FC<PostDetailsCardProps> = ({
	publishedAt,
	url,
	title,
	username,
	commentsAmmount = 0,
	content,
}) => {
	const commentsAmountLabel =
		commentsAmmount === 1 ? "comentário" : "comentários"

	return (
		<PostDetailsCardContainer>
			<PostDetailsHeaderCard>
				<AnchorLink href="#" text="Voltar" isGoBackLink />
				<AnchorLink href={url} text="Ver no GitHub" />
			</PostDetailsHeaderCard>

			<PostDetailsBodyCard>
				<PostDetailsTitle>{title}</PostDetailsTitle>
			</PostDetailsBodyCard>

			<PostDetailsCardFooter>
				<PostDetailsCardFooterInfoBox>
					<GithubLogo size={18} />
					<PostDetailsCardInfoText>{username}</PostDetailsCardInfoText>
				</PostDetailsCardFooterInfoBox>

				<PostDetailsCardFooterInfoBox>
					<CalendarBlank size={18} />
					<PostDetailsCardInfoText>
						{getTimePassed(publishedAt)}
					</PostDetailsCardInfoText>
				</PostDetailsCardFooterInfoBox>

				<PostDetailsCardFooterInfoBox>
					<ChatCentered size={18} />

					<PostDetailsCardInfoText>
						{commentsAmmount} {commentsAmountLabel}
					</PostDetailsCardInfoText>
				</PostDetailsCardFooterInfoBox>
				{/* END OF COMPONENT */}
			</PostDetailsCardFooter>
			{/* END OF COMPONENT */}
		</PostDetailsCardContainer>
	)
}
