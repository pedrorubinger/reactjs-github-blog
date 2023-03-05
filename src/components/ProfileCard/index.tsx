import React, { useEffect, useState } from "react"
import { Buildings, GithubLogo, Users } from "phosphor-react"

import {
	ProfileBio,
	ProfileContent,
	ProfileContentBody,
	ProfileContentFooter,
	ProfileContentInfoText,
	ProfileContentHeader,
	ProfileImage,
	ProfileName,
	StyledProfileCard,
	ProfileContentFooterInfoBox,
} from "~/components/ProfileCard/styles"
import { AnchorLink } from "~/components/Link"
import { ProfileCardSkeleton } from "~/components/ShimmerSkeleton"

interface ProfileCardProps {
	name: string
	avatar: string
	url: string
	username: string
	followers: number
	bio?: string
	company?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
	name,
	url,
	avatar,
	username,
	followers = 0,
	bio = "Este usuário não possui uma biografia pública.",
	company = "Não informado",
}) => {
	const followersLabel = followers === 1 ? "seguidor" : "seguidores"
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 3000)
	}, [])

	if (isLoading) {
		return (
			<StyledProfileCard>
				<ProfileContent>
					<ProfileCardSkeleton />
				</ProfileContent>
			</StyledProfileCard>
		)
	}

	return (
		<StyledProfileCard>
			<ProfileImage src={avatar} alt="" />

			<ProfileContent>
				<ProfileContentHeader>
					<ProfileName>{name}</ProfileName>

					<AnchorLink text="GitHub" href={url} target="_blank" />
				</ProfileContentHeader>

				<ProfileContentBody>
					<ProfileBio>{bio}</ProfileBio>
				</ProfileContentBody>

				<ProfileContentFooter>
					<ProfileContentFooterInfoBox>
						<GithubLogo size={18} />
						<ProfileContentInfoText>{username}</ProfileContentInfoText>
					</ProfileContentFooterInfoBox>

					<ProfileContentFooterInfoBox>
						<Buildings size={18} />
						<ProfileContentInfoText>{company}</ProfileContentInfoText>
					</ProfileContentFooterInfoBox>

					<ProfileContentFooterInfoBox>
						<Users size={18} />

						<ProfileContentInfoText>
							{followers} {followersLabel}
						</ProfileContentInfoText>
					</ProfileContentFooterInfoBox>
					{/* END OF COMPONENT */}
				</ProfileContentFooter>
				{/* END OF COMPONENT */}
			</ProfileContent>
		</StyledProfileCard>
	)
}
