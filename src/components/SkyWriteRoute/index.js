import React, { useRef } from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Plane from "./components/Plane"
import WriteCloud from "./components/WriteCloud"

const Container = tw.div`
  w-full relative
  justify-center items-center
`

const Space = tw.div`
  flex-1
`

const WriteContainer = styled.div`
  width: 100vw;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
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
  const { route, delay: rowDelay } = props

  const planeVariation = useRef(Math.random() / 5)

  const planeTiming = [5.5 + planeVariation.current, rowDelay + 0.5] // time, delay
  const cloudTiming = [rowDelay + 2 + 0.5, 0.1] // delay, iterative delay

  return (
    <Container>
      <Plane timing={planeTiming} />
      <WriteContainer>
        {getRouteArray(route).map((item, i) => (
          <Space>
            {item && <WriteCloud delay={cloudTiming[0] + i * cloudTiming[1]} />}
          </Space>
        ))}
      </WriteContainer>
    </Container>
  )
}
