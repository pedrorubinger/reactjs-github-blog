interface Reactions {
	url: string
	total_count: number
	"+1": number
	"-1": number
	laugh: number
	hooray: number
	confused: number
	heart: number
	rocket: number
	eyes: number
}

interface User {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
}

export interface GitHubRepoIssueItem {
	url: string
	repository_url: string
	labels_url: string
	comments_url: string
	events_url: string
	html_url: string
	id: number
	node_id: string
	number: number
	title: string
	user: User
	labels: string[] /* ? */
	state: string
	locked: boolean
	assignee: string | null /* ? */
	assignees: string[] /* ? */
	milestone: string | null /* ? */
	comments: number
	created_at: Date
	updated_at: Date
	closed_at: Date
	author_association: string | "NONE" /* ? */
	active_lock_reason: string | null /* ? */
	body: string
	reactions: Reactions
	timeline_url: string
	performed_via_github_app: null /* ? */
	state_reason: null /* ? */
	score: number
}

export interface GitHubRepoIssueData {
	total_count: number
	incomplete_results: boolean
	items: GitHubRepoIssueItem[]
}
