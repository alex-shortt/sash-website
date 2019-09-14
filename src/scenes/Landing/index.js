import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

const Container = styled.div`
  ${tw`
    w-full h-screen
    flex justify-center items-center
  `};

  background: linear-gradient(180deg, #598ac2, #639cdf);
`

const Text = tw.h1`
    text-center text-white
    m-0
`

export default function Landing(props) {
  return (
    <Container>
      <Text>SASH</Text>
    </Container>
  )
}
