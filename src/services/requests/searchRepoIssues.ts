import { Api } from "~/services/api"
import {
	GitHubSearchRepoIssueParams,
	GitHubEndpoint,
	SeachRepoIssueResponse,
	GitHubRepoIssueData,
} from "~/interfaces"

export const searchRepoIssues = async ({
	query,
	repo,
	username,
}: GitHubSearchRepoIssueParams): Promise<SeachRepoIssueResponse> => {
	try {
		const url = `${GitHubEndpoint.SEARCH}/issues?q=${query}%20repo:${username}/${repo}`
		const response = await Api.get<GitHubRepoIssueData>(url)

		return { success: true, data: response.data }
	} catch (err) {
		/** TO DO: Handle errors properly... */
		return { success: false, data: null }
	}
}
