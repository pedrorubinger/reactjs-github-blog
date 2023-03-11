import { GitHubRepoIssueItem } from "~/interfaces"
import { removeMarkdownFormatting } from "~/utils/removeMarkdownFormatting"

export const formatPost = (posts: GitHubRepoIssueItem[]) =>
	posts.map((item) => {
		return {
			publishedAt: new Date(item.created_at),
			id: item.id,
			title: item.title,
			text: removeMarkdownFormatting(item.body),
		}
	})
