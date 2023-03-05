import { Outlet } from "react-router-dom"

import GenericAvatar from "~/assets/GenericAvatar.svg"
import {
	CoverLayoutContainer,
	CoverLayoutProfileContainer,
} from "~/layouts/Cover/styles"
import { Cover } from "~/components/Cover"
import { ProfileCard } from "~/components/ProfileCard"

interface CoverLayoutProps {}

export const CoverLayout: React.FC<CoverLayoutProps> = () => {
	return (
		<CoverLayoutContainer>
			<Cover />

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
			<Outlet />
		</CoverLayoutContainer>
	)
}
