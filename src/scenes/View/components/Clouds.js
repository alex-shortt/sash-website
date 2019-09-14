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
  const { mousePos = [0, 0], orientation } = props

  const offset = orientation ? (orientation.beta / 180) * 1.5 : mousePos[1]

  return (
    <>
      <Cloud
        image={cloud1}
        y={20}
        xInit={80}
        velocity={40}
        offset={offset}
        maxOffset={85}
        style={{ height: "25vh" }}
      />
      <Cloud
        image={cloud2}
        y={28}
        velocity={25}
        offset={offset}
        maxOffset={10}
        style={{ height: "30vh" }}
      />
      <Cloud
        image={cloud3}
        y={69}
        xInit={50}
        velocity={30}
        offset={offset}
        maxOffset={20}
        style={{ height: "30vh" }}
      />
      <Cloud
        image={cloud4}
        y={80}
        xInit={20}
        offset={offset}
        maxOffset={30}
        style={{ opacity: 0.5, zIndex: 3, filter: "blur(2px)", height: "38vh" }}
      />
      <Cloud
        image={cloud5}
        y={99}
        xInit={60}
        velocity={75}
        offset={offset}
        maxOffset={60}
        style={{ filter: "brightness(1.1)", height: "35vh" }}
      />
    </>
  )
}
