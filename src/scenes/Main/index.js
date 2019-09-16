import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

import Clouds from "./components/Clouds"
import Song from "./components/Song"

const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  height: 100px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`

export default function Main(props) {
  return (
    <>
      <Helmet title="Main" />
      <Clouds {...props} />
      <Wrapper>
        <Song />
      </Wrapper>
    </>
  )
}
