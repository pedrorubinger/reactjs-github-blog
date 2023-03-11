import { createContext, useCallback, useState } from "react"

import { Post } from "~/interfaces"
import { getRepoIssues, searchRepoIssues } from "~/services/requests"
import { formatPost } from "~/utils"

interface PostProviderProps {
	children: React.ReactNode
}

interface PostContextType {
	posts: Post[]
	isFetchingPosts: boolean
	fetchPosts: () => Promise<void>
	fetchIssues: (query: string) => Promise<void>
}

const Definitions = {
	USERNAME: "pedrorubinger",
	REPO: "reactjs-github-blog",
}

export const PostContext = createContext({} as PostContextType)

export const PostProvider = ({ children }: PostProviderProps) => {
	const [posts, setPosts] = useState<Post[]>([])
	const [isFetchingPosts, setIsFetchingPost] = useState(false)

	const fetchIssues = useCallback(async (query: string) => {
		setIsFetchingPost(true)

		/** TO DO: Handle error properly */
		const { success, data } = await searchRepoIssues({
			repo: Definitions.REPO,
			username: Definitions.USERNAME,
			query,
		})

		setIsFetchingPost(false)

		if (success && data) {
			setPosts(formatPost(data.items))
		}
	}, [])

	const fetchPosts = useCallback(async () => {
		setIsFetchingPost(true)

		/** TO DO: Handle error properly */
		const { success, data } = await getRepoIssues({
			username: Definitions.USERNAME,
			repo: Definitions.REPO,
		})

		setIsFetchingPost(false)

		if (success && data) {
			setPosts(formatPost(data))
		}
	}, [])

	return (
		<PostContext.Provider
			value={{ isFetchingPosts, posts, fetchPosts, fetchIssues }}
		>
			{children}
		</PostContext.Provider>
	)
}
