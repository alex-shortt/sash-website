import React, { useState, useEffect } from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"
import { Tween } from "react-gsap"

const Container = styled.div.attrs(props => ({
  style: {
    transform: `translateX(-${100 - props.x + 1}%) translateY(-50%)`,
    left: `${props.x + 1}vw`,
    transition: `all ${props.anim === "true" ? "1s" : "0s"} linear`
  }
}))`
  position: absolute;
  top: ${props => props.y}%;
  z-index: 0;
  height: 30vh;
`

const Image = styled.img.attrs(props => ({
  style: {
    transform: `translateY(${props.yOffset}px)`
  }
}))`
  height: 100%;
`

export default function Cloud(props) {
  const {
    image,
    xInit = 0,
    y = 50,
    velocity = 60,
    offset,
    maxOffset,
    ...restProps
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
    <Container x={xPos} y={y} anim={anim} {...restProps}>
      <Tween to={{ y: `${maxOffset * offset}px` }} duration={2}>
        <Image src={image} />
      </Tween>
    </Container>
  )
}
