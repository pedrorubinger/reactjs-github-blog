import { GitHubRepoIssueItem, Post } from "~/interfaces"
import { removeMarkdownFormatting } from "~/utils/removeMarkdownFormatting"

export const formatPost = (posts: GitHubRepoIssueItem[]): Post[] =>
	posts.map((item) => {
		return {
			publishedAt: new Date(item.created_at),
			commentsAmount: item.comments,
			id: item.id,
			title: item.title,
			text: removeMarkdownFormatting(item.body),
			rawText: item.body,
		}
	})
