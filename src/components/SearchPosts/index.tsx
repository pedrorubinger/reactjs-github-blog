import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react"

import {
	SearchPostsAmount,
	SearchPostsContainer,
	SearchPostsHeader,
	SearchPostsTitle,
} from "~/components/SearchPosts/styles"
import { PostContext } from "~/contexts"
import { Input } from "~/components/Input"

interface SearchPostsProps {}

export const SearchPosts: React.FC<SearchPostsProps> = () => {
	const timeout = useRef<NodeJS.Timeout | undefined>()
	const isFirstUseEffectRender = useRef<boolean>(true)
	const { posts, fetchIssues } = useContext(PostContext)

	const [search, setSearch] = useState<string>("")

	const amount = posts.length
	const amountLabel = amount === 1 ? "publicação" : "publicações"

	const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isFirstUseEffectRender.current) {
			isFirstUseEffectRender.current = false
		}

		setSearch(e.target.value)
	}

	const searchIssues = useCallback(
		async (value: string) => {
			await fetchIssues(value)
		},
		[fetchIssues]
	)

	useEffect(() => {
		if (!isFirstUseEffectRender.current) {
			timeout.current = setTimeout(() => {
				void searchIssues(search)
			}, 1200)
		}

		return () => {
			clearTimeout(timeout.current)
		}
	}, [search, searchIssues])

	return (
		<SearchPostsContainer>
			<SearchPostsHeader>
				<SearchPostsTitle>Publicações</SearchPostsTitle>
				<SearchPostsAmount>
					{amount} {amountLabel}
				</SearchPostsAmount>
			</SearchPostsHeader>

			<Input
				placeholder="Buscar conteúdo"
				type="text"
				value={search}
				onChange={onChangeText}
			/>
		</SearchPostsContainer>
	)
}
