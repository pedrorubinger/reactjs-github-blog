import React, { useCallback, useContext, useEffect } from "react"
import { Buildings, GithubLogo, Users } from "phosphor-react"

import { ProfileContext } from "~/contexts/ProfileContext"
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

interface ProfileCardProps {}

export const ProfileCard: React.FC<ProfileCardProps> = () => {
	const { isFetchingProfile, profile, fetchProfile } =
		useContext(ProfileContext)
	const followersLabel = profile?.followers === 1 ? "seguidor" : "seguidores"

	const fetchData = useCallback(async (): Promise<void> => {
		await fetchProfile("pedrorubinger")
	}, [])

	useEffect(() => {
		void fetchData()
	}, [fetchData])

	if (isFetchingProfile) {
		return (
			<StyledProfileCard>
				<ProfileContent>
					<ProfileCardSkeleton />
				</ProfileContent>
			</StyledProfileCard>
		)
	}

	if (!profile) {
		return null
	}

	return (
		<StyledProfileCard>
			<ProfileImage src={profile.avatar_url} alt="" />

			<ProfileContent>
				<ProfileContentHeader>
					<ProfileName>{profile.name}</ProfileName>

					<AnchorLink text="GitHub" href={profile.html_url} target="_blank" />
				</ProfileContentHeader>

				<ProfileContentBody>
					<ProfileBio>
						{profile?.bio ?? "Este usuário não possui uma biografia pública."}
					</ProfileBio>
				</ProfileContentBody>

				<ProfileContentFooter>
					<ProfileContentFooterInfoBox>
						<GithubLogo size={18} />
						<ProfileContentInfoText>{profile.login}</ProfileContentInfoText>
					</ProfileContentFooterInfoBox>

					<ProfileContentFooterInfoBox>
						<Buildings size={18} />
						<ProfileContentInfoText>
							{profile?.company ?? "Não informado"}
						</ProfileContentInfoText>
					</ProfileContentFooterInfoBox>

					<ProfileContentFooterInfoBox>
						<Users size={18} />

						<ProfileContentInfoText>
							{profile.followers} {followersLabel}
						</ProfileContentInfoText>
					</ProfileContentFooterInfoBox>
					{/* END OF COMPONENT */}
				</ProfileContentFooter>
				{/* END OF COMPONENT */}
			</ProfileContent>
		</StyledProfileCard>
	)
}
