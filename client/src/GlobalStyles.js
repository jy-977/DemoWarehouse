import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #FFFFFF;
    color: #0F131F;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    word-break: break-word;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    color: #0F131F;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`