import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import cloud1 from "assets/clouds/cloud1.png"
import cloud2 from "assets/clouds/cloud2.png"
import cloud3 from "assets/clouds/cloud3.png"
import cloud4 from "assets/clouds/cloud4.png"
import cloud5 from "assets/clouds/cloud5.png"
import Cloud from "components/Cloud"

export default function Clouds(props) {
  return (
    <>
      <Cloud image={cloud1} y={20} xInit={80} velocity={40} height={25} />
      <Cloud image={cloud2} y={28} velocity={25} />
      <Cloud image={cloud3} y={69} xInit={50} velocity={30} height={30} />
      <Cloud
        image={cloud4}
        y={80}
        xInit={20}
        height={38}
        zIndex={3}
        opacity={0.5}
        blur={2}
      />
      <Cloud image={cloud5} y={99} xInit={60} velocity={75} brightness={1.1} />
    </>
  )
}
