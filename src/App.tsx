import { ThemeProvider } from "styled-components"

import { defaultTheme } from "~/themes/Default"
import { GlobalStyles } from "~/themes/Global"

const App = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
