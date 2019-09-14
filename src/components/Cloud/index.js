import React, { useState, useEffect } from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"
import { Tween } from "react-gsap"

const Container = styled.div.attrs(props => ({
  style: {
    transform: `translateX(-${100 - props.x + 1}%) translateY(-${props.y}%)`,
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

function getLayerStyles(layer) {
  const styles = {}

  styles.zIndex = layer
  styles.opacity = Math.min(1, layer / 20 + 0.5)

  const brightness = Math.max((layer / 20) * 0.9, 1)
  const blur = `${Math.max(((20 - layer) / 20) * 2.5, 0)}px`
  styles.filter = `brightness(${brightness}) blur(${blur})`

  styles.duration = Math.max((layer / 20) * 1.2 + 1, 1)
  styles.maxOffset = Math.max((layer / 20) * 40 + 20, 25)
  styles.velocity = Math.min(Math.pow(layer / 20, 2) * 50 + 25, 80)
  return styles
}

export default function Cloud(props) {
  const { image, xInit = 0, y = 50, offset, layer } = props

  const [moving, setMoving] = useState("false")
  const [xPos, setXPos] = useState(xInit)
  const [anim, setAnim] = useState("true")

  const { duration, maxOffset, velocity, ...styles } = getLayerStyles(layer)

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
    <Container x={xPos} y={y} anim={anim} style={styles}>
      <Tween to={{ y: `${maxOffset * offset}px` }} duration={duration}>
        <Image src={image} />
      </Tween>
    </Container>
  )
}
