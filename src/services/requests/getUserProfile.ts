import { Api } from "~/lib/api"
import { GetUserProfileResponse, GitHubProfileData } from "~/interfaces"

export const getUserProfile = async (
	username: string
): Promise<GetUserProfileResponse> => {
	try {
		const response = await Api.get<GitHubProfileData>(`/users/${username}`)

		return { success: true, data: response.data }
	} catch (err) {
		/** TO DO: Handle errors properly... */
		return { success: false, data: null }
	}
}
