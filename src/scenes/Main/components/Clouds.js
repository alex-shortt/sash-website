import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import Cloud from "components/Cloud"
import cloud1 from "assets/clouds/cloud1.png"
import cloud2 from "assets/clouds/cloud2.png"
import cloud3 from "assets/clouds/cloud3.png"
import cloud4 from "assets/clouds/cloud4.png"
import cloud5 from "assets/clouds/cloud5.png"

export default function Clouds(props) {
  const { offset } = props

  return (
    <>
      <Cloud
        image={cloud1}
        y={20}
        xInit={60}
        offset={offset}
        layer={9}
        style={{ height: "25vh" }}
      />
      <Cloud
        image={cloud2}
        xInit={0}
        y={28}
        offset={offset}
        layer={15}
        style={{ height: "30vh" }}
      />
      {/* long and lazy */}
      <Cloud
        image={cloud3}
        xInit={50}
        y={69}
        offset={offset}
        layer={4}
        style={{ height: "30vh" }}
      />
      <Cloud
        image={cloud4}
        y={80}
        xInit={20}
        offset={offset}
        layer={24}
        style={{ height: "38vh" }}
      />
      <Cloud
        image={cloud5}
        y={99}
        xInit={78}
        offset={offset}
        layer={19}
        style={{ height: "35vh" }}
      />
    </>
  )
}
