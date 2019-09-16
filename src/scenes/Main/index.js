import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"

import Clouds from "./components/Clouds"
import Song from "./components/Song"
import Tickets from "./components/Tickets"

const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  position: relative;
  z-index: 20;
  padding-bottom: 10rem;
`

const Spacer = styled.div`
  width: 100%;
  height: 300px;
`

export default function Main(props) {
  return (
    <>
      <Helmet title="Main" />
      <Clouds {...props} />
      <Wrapper>
        <Song />
        <Spacer />
        <Tickets />
      </Wrapper>
    </>
  )
}
