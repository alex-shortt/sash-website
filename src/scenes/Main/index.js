import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

import Clouds from "./components/Clouds"

export default function Main(props) {
  return (
    <>
      <Helmet title="Main" />
      <Clouds {...props} />
    </>
  )
}
