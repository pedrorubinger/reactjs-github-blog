import { GitHubProfileData } from "~/interfaces/GitHubProfileData"

export interface GetUserProfileResponse {
	success: boolean
	data: GitHubProfileData | null
}
