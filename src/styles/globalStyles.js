import tw from "tailwind.macro"
import { createGlobalStyle } from "styled-components/macro"
import "typeface-roboto"
import "normalize.css"

import "./fontawesome"

export default createGlobalStyle`
  body {
    ${tw`text-gray-800`};
    font-family: Avenir, Lato, Roboto, sans-serif;
  }
`
