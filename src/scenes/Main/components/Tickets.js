import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Text from "components/Text"
import Button from "components/Button"
import Subtitle from "components/Subtitle"
import Image from "components/Image"
import tourImage from "assets/content/tour-image.jpg"

const Container = styled.div`
  text-align: center;
`

export default function Tickets(props) {
  return (
    <Container>
      <Image src={tourImage} />
      <Text>Get tickets to my live show</Text>
      <Subtitle>Dec 20, 2019 @ Exchange LA</Subtitle>
      <br />
      <br />
      <Button>Purchase Tickets</Button>
    </Container>
  )
}
