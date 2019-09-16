import React, { useState, useCallback, useEffect } from "react"

import Helmet from "components/Helmet"
import Intro from "scenes/Intro"
import Main from "scenes/Main"
import GapClouds from "scenes/GapClouds"
import { Landing, Gap, Content } from "components/Containers"

export default function View(props) {
  const [mouseY, setMouseY] = useState(0)
  const [orientation, setOrientation] = useState(0)
  const [scrollDist, setScrollDist] = useState(0)
  const [cloudOffset, setCloudOffset] = useState()

  const handleOrientationChange = useCallback(
    e => setOrientation(e.beta / 180 - 0.5),
    []
  )
  const handleMousePositionChange = useCallback(
    e => setMouseY((window.scrollY + e.clientY) / document.body.clientHeight),
    []
  )
  const handleScrollChange = useCallback(
    () =>
      setScrollDist(
        window.scrollY / (document.body.clientHeight - window.innerHeight)
      ),
    []
  )

  useEffect(() => {
    if (!cloudOffset) {
      window.addEventListener("deviceorientation", handleOrientationChange)
      window.addEventListener("scroll", handleScrollChange)
    }

    setCloudOffset(orientation + scrollDist + mouseY * 1.2 - 1)
  }, [
    cloudOffset,
    handleOrientationChange,
    handleScrollChange,
    mouseY,
    orientation,
    scrollDist
  ])

  return (
    <div onMouseMove={handleMousePositionChange}>
      <Helmet title="Sash" />
      <Landing>
        <Intro offset={cloudOffset} />
      </Landing>
      <Gap>
        <GapClouds offset={cloudOffset} />
      </Gap>
      <Content>
        <Main offset={cloudOffset} />
      </Content>
    </div>
  )
}
