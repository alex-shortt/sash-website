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
        xInit={60}
        y={10}
        offset={offset}
        layer={9}
        style={{ height: "25vh" }}
      />
      <Cloud
        image={cloud5}
        xInit={87}
        y={22}
        offset={offset}
        layer={23}
        style={{ height: "28vh" }}
      />
      <Cloud
        image={cloud2}
        xInit={0}
        y={50}
        offset={offset}
        layer={15}
        style={{ height: "30vh" }}
      />
      {/* long and lazy */}
      <Cloud
        image={cloud3}
        xInit={50}
        y={64}
        offset={offset}
        layer={4}
        style={{ height: "30vh" }}
      />
      <Cloud
        image={cloud4}
        xInit={20}
        y={80}
        offset={offset}
        layer={24}
        style={{ height: "38vh" }}
      />
      <Cloud
        image={cloud5}
        xInit={78}
        y={99}
        offset={offset}
        layer={19}
        style={{ height: "35vh" }}
      />
    </>
  )
}
