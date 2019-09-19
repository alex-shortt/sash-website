import React, { useState, useEffect, useCallback } from "react"
import styled, { keyframes, css } from "styled-components/macro"

import cloud1 from "assets/clouds/cloud1.png"
import cloud2 from "assets/clouds/cloud2.png"
import cloud3 from "assets/clouds/cloud3.png"
import cloud4 from "assets/clouds/cloud4.png"
import cloud5 from "assets/clouds/cloud5.png"
import cloud00 from "assets/cloudBitmaps/cloud-0.png"
import cloud01 from "assets/cloudBitmaps/cloud-1.png"
import cloud02 from "assets/cloudBitmaps/cloud-2.png"
import cloud03 from "assets/cloudBitmaps/cloud-3.png"
import cloud04 from "assets/cloudBitmaps/cloud-4.png"
import plane from "assets/plane/plane.png"

import FullScreenLoading from "../FullScreenLoading"

const assets = [
  cloud1,
  cloud2,
  cloud3,
  cloud4,
  cloud5,
  cloud00,
  cloud01,
  cloud02,
  cloud03,
  cloud04,
  plane
]

const fadeOutAnim = keyframes`
  0% { opacity: 1; }
  99% { opacity: 0; }
  100% { display: none; opacity: 0; }
`

const fadeOutApplied = css`
  animation: ${fadeOutAnim} 1.75s ease-out forwards;
`

const Wrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${props => props.fadeOut && fadeOutApplied};
  animation-delay: 0.25s;
`

const Container = styled.div`
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
  display: none;

  & > img {
    height: 0;
    pointer-events: none;
  }
`

export default function Preload(props) {
  const { onDone, fadeOut } = props

  const [init, setInit] = useState("false")
  const [numLoaded, setNumLoaded] = useState(0)
  let numLoadedThisRender = 0

  useEffect(() => {
    if (init === "false") {
      setInit("true")
      setTimeout(onDone, 2500)
    }

    if (numLoaded === assets.length) {
      console.log("done")
      onDone()
    }
  }, [init, numLoaded, onDone])

  const onLoad = useCallback(() => {
    numLoadedThisRender += 1
    console.log("this render: ", numLoadedThisRender)
    setNumLoaded(numLoaded + numLoadedThisRender)
  }, [])

  return (
    <Wrapper fadeOut={fadeOut}>
      <Container>
        {assets.map(asset => (
          <img src={asset} onLoad={onLoad} onError={onLoad} />
        ))}
      </Container>
      <FullScreenLoading />
    </Wrapper>
  )
}
