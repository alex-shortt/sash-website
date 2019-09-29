import React from "react"
import styled from "styled-components/macro"

import wwacd from "assets/content/wwacd.jpeg"
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
      <Image src={wwacd} />
      <Text>What Would a Champion Do?</Text>
      <Subtitle>Now streaming on all platforms</Subtitle>
      <br />
      <br />
      <a href="https://smarturl.it/n5fydy">
        <Button>Listen Now</Button>
      </a>
    </Container>
  )
}
