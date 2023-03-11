import { GitHubRepoIssueData } from "~/interfaces/GitHubRepoIssueData"

export interface SeachRepoIssueResponse {
	success: boolean
	data: GitHubRepoIssueData | null
}
