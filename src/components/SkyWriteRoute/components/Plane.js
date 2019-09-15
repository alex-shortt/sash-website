import React, { useState, useEffect } from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.start === "true" ? "100%" : "0px")};
  width: 100px;
  height: 50px;
  background: rgba(255, 0, 0, 0.5);
  transform: translateY(-50%)
    ${props =>
      props.start === "true" ? "translateX(100%)" : "translateX(-100%)"};
  transition: all ${props => props.time}s linear;
`

export default function Plane(props) {
  const { timing } = props

  const [start, setStart] = useState("false")

  useEffect(() => {
    if (start === "false") {
      setTimeout(() => setStart("true"), timing[1] * 1000)
    }
  }, [start, timing])

  return <Container start={start} time={timing[0]} />
}
