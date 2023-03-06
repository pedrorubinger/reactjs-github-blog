import { createContext, useState } from "react"

import { GetUserProfileResponse, GitHubProfileData } from "~/interfaces"
import { getUserProfile } from "~/services/requests"

type Profile = GitHubProfileData | null

interface ProfileProviderProps {
	children: React.ReactNode
}

interface ProfileContextType {
	profile: Profile
	isFetchingProfile: boolean
	fetchProfile: (username: string) => Promise<void>
}

export const ProfileContext = createContext({} as ProfileContextType)

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
	const [profile, setProfile] = useState<Profile>(null)
	const [isFetchingProfile, setIsFetchingProfile] = useState(false)

	const fetchProfile = async (username: string) => {
		setIsFetchingProfile(true)

		const response: GetUserProfileResponse = await getUserProfile(username)

		if (response.success && response?.data) {
			setProfile(response.data)
		}

		setIsFetchingProfile(false)
	}

	return (
		<ProfileContext.Provider
			value={{ isFetchingProfile, profile, fetchProfile }}
		>
			{children}
		</ProfileContext.Provider>
	)
}
