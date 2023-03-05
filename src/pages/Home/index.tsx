import React from "react"
import { useNavigate } from "react-router-dom"

import {
	CoverLayoutProfileContainer,
	HomeContainer,
	HomeContent,
	PostCardsContainer,
} from "~/pages/Home/styles"
import { Post } from "~/interfaces"
import GenericAvatar from "~/assets/GenericAvatar.svg"
import { ProfileCard } from "~/components/ProfileCard"
import { SearchPosts } from "~/components/SearchPosts"
import { PostCard } from "~/components/PostCard"
import { EmptyPostList } from "~/components/EmptyPostList"

interface HomeProps {}

const MOCKED_DATA = [
	{
		id: 1,
		publishedAt: new Date("2023-12-29T17:44:19"),
		text: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

	Dynamic typing
	JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
	
	let foo = 42; // foo is now a number
	foo = 'bar'; // foo is now a string
	foo = true; // foo is now a boolean`,
		title: "JavaScript data types and data structures",
	},
	{
		id: 2,
		publishedAt: new Date("2023-12-29T17:44:19"),
		text: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

	Dynamic typing
	JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
	
	let foo = 42; // foo is now a number
	foo = 'bar'; // foo is now a string
	foo = true; // foo is now a boolean`,
		title: "JavaScript data types and data structures",
	},
	{
		id: 3,
		publishedAt: new Date("2023-12-29T17:44:19"),
		text: `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

	Dynamic typing
	JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
	
	let foo = 42; // foo is now a number
	foo = 'bar'; // foo is now a string
	foo = true; // foo is now a boolean`,
		title: "JavaScript data types and data structures",
	},
]

export const Home: React.FC<HomeProps> = () => {
	const navigate = useNavigate()
	const posts: Post[] = MOCKED_DATA

	const onClickPostCard = () => navigate("/post")

	return (
		<HomeContainer>
			<CoverLayoutProfileContainer>
				<ProfileCard
					followers={8}
					avatar={GenericAvatar}
					name="Pedro Rubinger"
					username="pedrorubinger"
					company="Luby Software"
					url="https://github.com/pedrorubinger"
					bio="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse cum numquam nemo nisi quia eos expedita, commodi qui autem et officiis vel assumenda dolor libero quos dolorum, consequatur nihil quod."
				/>
			</CoverLayoutProfileContainer>

			<HomeContent>
				<SearchPosts amount={posts.length} />

				{!posts?.length && <EmptyPostList />}

				{!!posts?.length && (
					<PostCardsContainer>
						{MOCKED_DATA.map(({ id, ...rest }) => (
							<PostCard key={id} {...rest} onClick={onClickPostCard} />
						))}
					</PostCardsContainer>
				)}
			</HomeContent>
		</HomeContainer>
	)
}
