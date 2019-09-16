import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import albumCover from "assets/content/album-cover.jpg"
import Text from "components/Text"
import Button from "components/Button"

const Container = styled.div`
  text-align: center;
`

const Cover = styled.img.attrs({ src: albumCover })`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
  display: block;
`

export default function Song(props) {
  return (
    <Container>
      <Cover />
      <Text>Sleepy Eyes</Text>
      <br />
      <Button>Listen Now</Button>
    </Container>
  )
}
