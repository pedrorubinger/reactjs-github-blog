import { Outlet } from "react-router-dom"

import { CoverLayoutContainer } from "~/layouts/Cover/styles"
import { Cover } from "~/components/Cover"

interface CoverLayoutProps {}

export const CoverLayout: React.FC<CoverLayoutProps> = () => {
	return (
		<CoverLayoutContainer>
			<Cover />
			<Outlet />
		</CoverLayoutContainer>
	)
}
