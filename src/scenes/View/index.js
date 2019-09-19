import React, { useState, useCallback, useEffect } from "react"

import Helmet from "components/Helmet"
import Intro from "scenes/Intro"
import Main from "scenes/Main"
import Preload from "components/Preload"
import GapClouds from "scenes/GapClouds"
import { Landing, Gap, Content } from "components/Containers"

export default function View(props) {
  const [loading, setLoading] = useState("true")
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

    setCloudOffset(orientation * 2.5 + scrollDist + mouseY * 1.2 - 1)
  }, [
    cloudOffset,
    handleOrientationChange,
    handleScrollChange,
    mouseY,
    orientation,
    scrollDist
  ])

  if (loading === "true") {
    return <Preload onDone={() => setLoading("false")} />
  }

  return (
    <div onMouseMove={handleMousePositionChange}>
      <Preload fadeOut />
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
