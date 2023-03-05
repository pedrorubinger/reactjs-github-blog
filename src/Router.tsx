import { Route, Routes } from "react-router-dom"

import { Home } from "~/pages/Home"
import { CoverLayout } from "~/layouts/Cover"

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<CoverLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	)
}
