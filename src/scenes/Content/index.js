import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #48c5ee, #4ed4fc);
`

export default function Content(props) {
  return <Container />
}
