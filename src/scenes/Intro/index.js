import React from "react"
import styled, { keyframes } from "styled-components/macro"

import Cloud from "components/Cloud"
import SkyWriteRoute from "components/SkyWriteRoute"
import cloud1 from "assets/clouds/cloud1.png"
import cloud2 from "assets/clouds/cloud2.png"
import cloud3 from "assets/clouds/cloud3.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.h1`
  text-align: center;
  margin: 0;
  color: white;
`

const SkyWriteContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 20;
`

const bounceAnim = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(45deg);
  }
  40% {
    transform: translateY(-30px) rotate(45deg);
  }
  60% {
    transform: translateY(-15px) rotate(45deg);
  }
`

const AngleDown = styled.div`
  position: absolute;
  opacity: 0.7;
  filter: blur(0.5px);
  bottom: 6vh;
  width: 25px;
  height: 25px;
  border: 5px solid white;
  border-left: 0;
  border-top: 0;
  transform: rotate(45deg);
  animation: ${bounceAnim} 3.5s infinite;
`

export default function Intro(props) {
  const { offset } = props

  const route1 = "xxx     xx    xxx    x  x"
  const route2 = "x      x  x   x      x  x"
  const route3 = "xxxx   xxxx   xxxx   xxxx"
  const route4 = "   x   x  x      x   x  x"
  const route5 = " xxx   x  x    xxx   x  x"

  return (
    <Container>
      <Cloud
        image={cloud1}
        y={23}
        xInit={40}
        layer={14}
        offset={offset}
        style={{ height: "25vh" }}
      />
      <Cloud
        image={cloud3}
        y={80}
        xInit={25}
        layer={3}
        offset={offset}
        style={{ height: "34vh" }}
      />
      <Cloud
        image={cloud2}
        y={40}
        xInit={70}
        layer={22}
        offset={offset}
        style={{ height: "20vh" }}
      />
      <SkyWriteContainer>
        <SkyWriteRoute route={route1} delay={0.5} />
        <SkyWriteRoute route={route2} delay={0.25} />
        <SkyWriteRoute route={route3} delay={0} />
        <SkyWriteRoute route={route4} delay={0.2} />
        <SkyWriteRoute route={route5} delay={0.55} />
      </SkyWriteContainer>
      <AngleDown />
    </Container>
  )
}
