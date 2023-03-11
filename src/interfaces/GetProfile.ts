import { GitHubProfileData } from "~/interfaces"

export interface GetUserProfileResponse {
	success: boolean
	data: GitHubProfileData | null
}
