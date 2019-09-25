import { createGlobalStyle } from "styled-components/macro"
import "typeface-roboto"
import "normalize.css"

import "./fontawesome"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  
  body, html {
    overflow-x: hidden;
    font-family: 'Roboto', Avenir, Lato, Roboto, sans-serif;
  }
`
