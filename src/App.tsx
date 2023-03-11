import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { Router } from "~/Router"
import { defaultTheme } from "~/themes/Default"
import { GlobalStyles } from "~/themes/Global"
import { ProfileProvider } from "~/contexts/ProfileContext"
import { PostProvider } from "./contexts"

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<ProfileProvider>
					<PostProvider>
						<Router />
					</PostProvider>
				</ProfileProvider>
			</BrowserRouter>

			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
