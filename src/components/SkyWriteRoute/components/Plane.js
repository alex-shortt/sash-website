import React, { useState, useEffect } from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

import planeImage from "assets/plane/plane.png"

const Container = styled.img`
  position: absolute;
  top: 50%;
  left: 0px;
  width: auto;
  height: 100%;
  transform: translateY(-50%)
    ${props =>
      props.start === "true"
        ? "translateX(100%) translateX(100vw)"
        : "translateX(-100%)"};
  transition: all ${props => props.time}s linear;
  opacity: 0.95;
`

export default function Plane(props) {
  const { timing } = props

  const [start, setStart] = useState("false")
  const [hidden, setHidden] = useState("false")

  useEffect(() => {
    if (start === "false") {
      setTimeout(() => {
        setStart("true")
        setTimeout(() => setHidden("true"), timing[0] * 1000)
      }, timing[1] * 1000)
    }
  }, [start, timing])

  return (
    <Container
      src={planeImage}
      start={start}
      time={timing[0]}
      hidden={hidden === "true"}
    />
  )
}
