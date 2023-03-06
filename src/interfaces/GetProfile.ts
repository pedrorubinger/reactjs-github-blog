import { GitHubProfileData } from "~/interfaces/GitHubProfileData"

export interface GetUserProfileProps {
	username: string
}

export interface GetUserProfileResponse {
	success: boolean
	data: GitHubProfileData | null
}
