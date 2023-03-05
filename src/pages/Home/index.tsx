import React from "react"

import { CoverLayoutProfileContainer, HomeContainer } from "~/pages/Home/styles"
import GenericAvatar from "~/assets/GenericAvatar.svg"
import { ProfileCard } from "~/components/ProfileCard"
import { SearchPosts } from "~/components/SearchPosts"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
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
			<SearchPosts amount={6} />
		</HomeContainer>
	)
}
