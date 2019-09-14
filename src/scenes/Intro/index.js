import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

const Container = tw.div`
    w-full h-full
    flex justify-center items-center
`

const Text = tw.h1`
    text-center text-white
    m-0
`

export default function Intro(props) {
  return (
    <Container>
      <Text>SASH</Text>
    </Container>
  )
}
