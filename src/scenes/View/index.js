import React, { useState, useCallback, useRef, useEffect } from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Intro from "scenes/Intro"
import { Landing, Gap, Content } from "components/Containers"

import Clouds from "./components/Clouds"

export default function View(props) {
  const [listenersSet, setListenersSet] = useState("false")
  const [mousePos, setMousePos] = useState()
  const [orientation, setOrientation] = useState()
  const [scrollDist, setScrollDist] = useState()
  const contentContainer = useRef()

  const handleOrientationChange = useCallback(e => setOrientation(e), [])
  const handleMousePositionChange = useCallback(e => {
    const { height } = contentContainer.current.getBoundingClientRect()
    const { offsetTop } = contentContainer.current
    const scrollTop = offsetTop - window.innerHeight

    setMousePos([
      e.clientX / window.innerWidth,
      Math.max(window.scrollY - scrollTop + e.clientY, 0) / height - 1
    ])
  }, [])
  const handleScrollChange = useCallback(() => {
    const { height } = contentContainer.current.getBoundingClientRect()
    const { offsetTop } = contentContainer.current
    const scrollTop = offsetTop - window.innerHeight
    setScrollDist((window.scrollY - scrollTop) / height)
  }, [])

  useEffect(() => {
    if (listenersSet === "false") {
      window.addEventListener("deviceorientation", handleOrientationChange)
      window.addEventListener("scroll", handleScrollChange)
      setListenersSet("true")
    }
  }, [
    handleOrientationChange,
    handleScrollChange,
    listenersSet,
    orientation,
    scrollDist
  ])

  return (
    <>
      <Helmet title="Sash" />
      <Landing>
        <Intro />
      </Landing>
      <Gap />
      <Content onMouseMove={handleMousePositionChange} ref={contentContainer}>
        <Clouds
          mousePos={mousePos}
          orientation={orientation}
          scrollDist={scrollDist}
        />
      </Content>
    </>
  )
}
