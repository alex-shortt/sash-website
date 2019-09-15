import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Plane from "./components/Plane"
import WriteCloud from "./components/WriteCloud"

const Container = tw.div`
  w-full relative
  flex justify-center items-center
`

const Space = tw.div`
  flex-1
`

const WriteContainer = styled.div`
  width: 100vw;
  max-width: 700px;
  margin: 0 5rem;
  display: flex;
`

const getRouteArray = route => {
  const array = []
  for (let i = 0; i < route.length; i += 1) {
    array.push(route.charAt(i) !== " ")
  }
  return array
}

export default function SkyWriteRoute(props) {
  const { route, delay = 0 } = props

  return (
    <Container>
      <Plane />
      <WriteContainer>
        {getRouteArray(route).map((item, i) => (
          <Space>{item && <WriteCloud delay={delay + i * 0.1 + 2} />}</Space>
        ))}
      </WriteContainer>
    </Container>
  )
}
