import { Route, Routes } from "react-router-dom"

import { CoverLayout } from "~/layouts/Cover"
import { Home } from "~/pages/Home"
import { Post } from "~/pages/Post"

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<CoverLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/post/:id" element={<Post />} />
			</Route>
		</Routes>
	)
}
