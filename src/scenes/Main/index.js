import React from "react"
import styled from "styled-components/macro"

import Clouds from "./components/Clouds"
import Song from "./components/Song"
import SongTwo from "./components/SongTwo"
import Tickets from "./components/Tickets"

const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  position: relative;
  z-index: 20;
  box-sizing: border-box;
  padding: 0 2rem;
  padding-bottom: 10rem;
`

const Spacer = styled.div`
  width: 100%;
  height: 175px;
`

export default function Main(props) {
  return (
    <>
      <Clouds {...props} />
      <Wrapper>
        <Song />
        <Spacer />
        <SongTwo />
        <Spacer />
        <Tickets />
      </Wrapper>
    </>
  )
}
