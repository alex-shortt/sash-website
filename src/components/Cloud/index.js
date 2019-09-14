import React, { useState, useEffect } from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

const Image = styled.img`
  position: absolute;
  top: ${props => props.y}%;
  left: ${props => props.x + 1}vw;
  transform: translateX(-${props => 100 - props.x + 1}%) translateY(-50%);
  z-index: ${props => props.z};
  height: ${props => props.height}vh;
  filter: brightness(${props => props.brightness})
    blur(${props => props.blur}px);
  transition: all ${props => (props.anim === "true" ? "1s" : "0s")} linear;
  opacity: ${props => props.opacity};
`

export default function Cloud(props) {
  const {
    image,
    xInit = 0,
    y = 50,
    zIndex = 0,
    height = 35,
    velocity = 60,
    brightness = 1,
    blur = 0,
    opacity = 1
  } = props

  const [moving, setMoving] = useState("false")
  const [xPos, setXPos] = useState(xInit)
  const [anim, setAnim] = useState("true")

  useEffect(() => {
    setTimeout(() => {
      if (xPos > 100) {
        setAnim("false")
        setTimeout(() => setXPos(0), 10)
      } else {
        setAnim("true")
        setXPos(xPos + velocity / 100)
      }
    }, 500)

    if (moving === "false") {
      setMoving("true")
      setAnim("true")
      setXPos(xPos + velocity / 100)
    }
  }, [moving, velocity, xPos])

  return (
    <>
      <Image
        src={image}
        x={xPos}
        y={y}
        z={zIndex}
        height={height}
        anim={anim}
        brightness={brightness}
        opacity={opacity}
        blur={blur}
      />
    </>
  )
}
