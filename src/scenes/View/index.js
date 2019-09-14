import React, { useState, useCallback, useRef, useEffect } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Intro from "scenes/Intro"
import { Landing, Gap, Content } from "components/Containers"

import Clouds from "./components/Clouds"

export default function View(props) {
  const [mousePos, setMousePos] = useState()
  const [orientation, setOrientation] = useState()
  const [scrollDist, setScrollDist] = useState()
  const contentContainer = useRef()

  const updateMousePosition = useCallback(e => {
    const { height } = contentContainer.current.getBoundingClientRect()
    const { offsetTop } = contentContainer.current
    const scrollTop = offsetTop - window.innerHeight

    setMousePos([
      e.clientX / window.innerWidth,
      Math.max(window.scrollY - scrollTop + e.clientY, 0) / height - 1
    ])
  }, [])

  useEffect(() => {
    window.addEventListener("deviceorientation", e => setOrientation(e), true)

    window.addEventListener(
      "scroll",
      e => {
        const { height } = contentContainer.current.getBoundingClientRect()
        const { offsetTop } = contentContainer.current
        const scrollTop = offsetTop - window.innerHeight
        // console.log(Math.max((window.scrollY - scrollTop) / height, 0))
        setScrollDist((window.scrollY - scrollTop) / height)
      },
      true
    )
  }, [])

  return (
    <>
      <Helmet title="Sash" />
      <Landing>
        <Intro />
      </Landing>
      <Gap />
      <Content onMouseMove={updateMousePosition} ref={contentContainer}>
        <Clouds
          mousePos={mousePos}
          orientation={orientation}
          scrollDist={scrollDist}
        />
      </Content>
    </>
  )
}
