import { GitHubRepoIssueItem } from "~/interfaces"

export interface GitHubGetRepoIssueParams {
	username: string
	repo: string
	issueId?: number
}

export interface GetRepoIssueResponse {
	success: boolean
	data: GitHubRepoIssueItem[] | null
}
