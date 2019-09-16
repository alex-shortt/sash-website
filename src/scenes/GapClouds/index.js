import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Cloud from "components/Cloud"
import cloud1 from "assets/clouds/cloud1.png"
import cloud4 from "assets/clouds/cloud4.png"
import cloud5 from "assets/clouds/cloud5.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export default function GapClouds(props) {
  const { offset } = props

  return (
    <Container>
      <Helmet title="GapClouds" />
      {/* <Cloud */}
      {/*  image={cloud1} */}
      {/*  y={23} */}
      {/*  xInit={40} */}
      {/*  layer={7} */}
      {/*  style={{ height: "25vh" }} */}
      {/* /> */}
      <Cloud
        image={cloud5}
        y={20}
        xInit={70}
        layer={11}
        offset={offset}
        style={{ height: "20vh" }}
      />
      <Cloud
        image={cloud4}
        y={95}
        xInit={25}
        layer={2}
        offset={offset}
        style={{ height: "34vh" }}
      />
      <Cloud
        image={cloud1}
        y={35}
        xInit={35}
        layer={4}
        offset={offset}
        style={{ height: "37vh" }}
      />
    </Container>
  )
}
