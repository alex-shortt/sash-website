import React, { useRef, useEffect } from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Cloud from "components/Cloud"
import SkyWriteRoute from "components/SkyWriteRoute"
import bigCloud1 from "assets/clouds/cloud1.png"
import bigCloud3 from "assets/clouds/cloud3.png"

const Container = tw.div`
    w-full h-full
    flex justify-center items-center
`

const Text = tw.h1`
    text-center text-white
    m-0
`

const SkyWriteContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function Intro(props) {
  const route1 = "xxx     xx    xxx    x  x"
  const route2 = "x      x  x   x      x  x"
  const route3 = "xxxx   xxxx   xxxx   xxxx"
  const route4 = "   x   x  x      x   x  x"
  const route5 = " xxx   x  x    xxx   x  x"

  return (
    <Container>
      <Cloud
        image={bigCloud1}
        y={20}
        xInit={60}
        layer={17}
        style={{ height: "25vh" }}
      />
      <Cloud
        image={bigCloud3}
        y={80}
        xInit={30}
        layer={3}
        style={{ height: "34vh" }}
      />
      <SkyWriteContainer>
        <SkyWriteRoute route={route1} delay={0.5} />
        <SkyWriteRoute route={route2} delay={0.25} />
        <SkyWriteRoute route={route3} delay={0} />
        <SkyWriteRoute route={route4} delay={0.2} />
        <SkyWriteRoute route={route5} delay={0.55} />
      </SkyWriteContainer>
    </Container>
  )
}
