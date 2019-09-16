import tw from "tailwind.macro"
import { createGlobalStyle } from "styled-components/macro"
import "typeface-roboto"
import "normalize.css"

import FuturaPT from "assets/fonts/futura-pt-extrabold.otf"

import "./fontawesome"

export default createGlobalStyle`
  @font-face {
    font-family: "FuturaPT";  
    src: url(${FuturaPT});
  }
  
  body, html {
    overflow-x: hidden;
    font-family: "FuturaPT", Avenir, Lato, Roboto, sans-serif;
  }
`
