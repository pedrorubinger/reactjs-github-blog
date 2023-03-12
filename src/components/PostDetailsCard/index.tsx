import React from "react"
import { useNavigate } from "react-router-dom"
import { CalendarBlank, ChatCentered, GithubLogo } from "phosphor-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { getTimePassed } from "~/utils"
import {
	PostDetailsCardFooter,
	PostDetailsCardFooterInfoBox,
	PostDetailsCardInfoText,
	PostDetailsCardContainer,
	PostDetailsHeaderCard,
	PostDetailsBodyCard,
	PostDetailsTitle,
	PostMetaDetailsContainer,
	PostDetailsContentContainer,
} from "~/components/PostDetailsCard/styles"
import { AnchorLink, ButtonLink } from "~/components/Link"

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
	const navigate = useNavigate()
	const commentsAmountLabel =
		commentsAmmount === 1 ? "comentário" : "comentários"

	const onGoBack = () => navigate("/")

	return (
		<PostDetailsCardContainer>
			<PostMetaDetailsContainer>
				<PostDetailsHeaderCard>
					<ButtonLink text="Voltar" onClick={onGoBack} />
					<AnchorLink href={url} text="Ver no GitHub" target="_blank" />
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
			</PostMetaDetailsContainer>

			<PostDetailsContentContainer>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
			</PostDetailsContentContainer>
		</PostDetailsCardContainer>
	)
}
