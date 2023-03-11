import { Api } from "~/services/api"
import {
	GetRepoIssueResponse,
	GitHubEndpoint,
	GitHubGetRepoIssueParams,
	GitHubRepoIssueItem,
} from "~/interfaces"

export const getRepoIssues = async ({
	username,
	repo,
	issueId,
}: GitHubGetRepoIssueParams): Promise<GetRepoIssueResponse> => {
	try {
		const url = `${GitHubEndpoint.REPOS}/${username}/${repo}/issues`
		const response = await Api.get<GitHubRepoIssueItem[]>(
			issueId ? `${url}/${issueId}` : url
		)

		return { success: true, data: response.data }
	} catch (err) {
		/** TO DO: Handle errors properly... */
		return { success: false, data: null }
	}
}
