import React from "react"
import styled from "styled-components/macro"

import albumCover from "assets/content/album-cover.jpg"
import Text from "components/Text"
import Subtitle from "components/Subtitle"
import Button from "components/Button"
import Image from "components/Image"

const Container = styled.div`
  text-align: center;
`

export default function Song(props) {
  return (
    <Container>
      <Image src={albumCover} />
      <Text>SMILE</Text>
      <Subtitle>Now streaming on all platforms</Subtitle>
      <br />
      <br />
      <a href="https://equitydistro.ffm.to/24ejokg">
        <Button>Listen Now</Button>
      </a>
    </Container>
  )
}
