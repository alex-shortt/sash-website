import React, { useRef } from "react"
import tw from "tailwind.macro"
import styled, { keyframes } from "styled-components/macro"

import cloud0 from "assets/cloudBitmaps/cloud-0.png"
import cloud1 from "assets/cloudBitmaps/cloud-1.png"
import cloud2 from "assets/cloudBitmaps/cloud-2.png"
import cloud3 from "assets/cloudBitmaps/cloud-3.png"
import cloud4 from "assets/cloudBitmaps/cloud-4.png"

const cloudBitmaps = [cloud0, cloud1, cloud2, cloud3, cloud4]

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const fadeIn = finalOpacity => keyframes`
  from {opacity: 0}
  to {opacity: ${finalOpacity}}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.3);
  filter: brightness(${props => props.brightness})
    blur(${props => props.blur}px);
  opacity: 0;
  animation: ${props => fadeIn(props.opacity)} 2.5s ease-out forwards;
  animation-delay: ${props => props.delay}s;
`

export default function WriteCloud(props) {
  const { delay } = props

  const image = useRef(
    cloudBitmaps[Math.floor(Math.random() * cloudBitmaps.length)]
  )
  const brightness = useRef(Math.random() * 0.16 + 1)
  const opacity = useRef(Math.random() * 0.2 + 0.8)
  const blur = useRef(Math.random() * 1.5)

  return (
    <Container>
      <Image
        src={image.current}
        brightness={brightness.current}
        opacity={opacity.current}
        blur={blur.current}
        delay={delay}
      />
    </Container>
  )
}
