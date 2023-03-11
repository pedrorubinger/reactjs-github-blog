import { Api } from "~/services/api"
import {
	GetUserProfileResponse,
	GitHubEndpoint,
	GitHubProfileData,
} from "~/interfaces"

export const getUserProfile = async (
	username: string
): Promise<GetUserProfileResponse> => {
	try {
		const response = await Api.get<GitHubProfileData>(
			`${GitHubEndpoint.USERS}/${username}`
		)

		return { success: true, data: response.data }
	} catch (err) {
		/** TO DO: Handle errors properly... */
		return { success: false, data: null }
	}
}
