import React, { useState, useCallback, useRef, useEffect } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Intro from "scenes/Intro"
import { Landing, Gap, Content } from "components/Containers"

import Clouds from "./components/Clouds"

export default function View(props) {
  const [mousePos, setMousePos] = useState()
  const [orientation, setOrientation] = useState()
  const contentContainer = useRef()

  const updateMousePosition = useCallback(
    e => {
      const { height, top } = contentContainer.current.getBoundingClientRect()
      setMousePos([e.clientX / window.innerWidth, (e.clientY - top) / height])
      console.log(mousePos)
    },
    [mousePos]
  )

  useEffect(() => {
    window.addEventListener("deviceorientation", e => setOrientation(e), true)
  }, [])

  return (
    <>
      <Helmet title="Sash" />
      <Landing>
        <Intro />
      </Landing>
      <Gap />
      <Content onMouseMove={updateMousePosition} ref={contentContainer}>
        <Clouds mousePos={mousePos} orientation={orientation} />
      </Content>
    </>
  )
}
