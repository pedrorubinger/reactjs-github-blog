import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme["base-background"]};
    color: ${({ theme }) => theme["base-text"]};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: ${({ theme }) =>
			`${theme.regular} ${theme.fs16} ${theme.nunito}, sans-serif`}
  }
`
