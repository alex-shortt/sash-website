import React from "react"
import styled from "styled-components/macro"

import shirt from "assets/content/sash-shirt.jpg"
import Text from "components/Text"
import Subtitle from "components/Subtitle"
import Button from "components/Button"
import Image from "components/Image"

const Container = styled.div`
  text-align: center;
`

export default function Shop(props) {
  return (
    <Container>
      <Image src={shirt} />
      <Text>Writing In The Sky T</Text>
      <Subtitle>Shop Now</Subtitle>
      <br />
      <br />
      <a href="https://shopsash.myshopify.com/">
        <Button>Go To Shop</Button>
      </a>
    </Container>
  )
}
