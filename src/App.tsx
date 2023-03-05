import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { defaultTheme } from "~/themes/Default"
import { GlobalStyles } from "~/themes/Global"
import { Router } from "~/Router"

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>

			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
