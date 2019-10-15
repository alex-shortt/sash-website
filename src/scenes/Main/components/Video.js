import React from "react"
import styled from "styled-components/macro"

import Text from "../../../components/Text"

const Container = styled.div`
  text-align: center;
`

const VideoContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
  display: block;
`

const IFrame = styled.iframe`
  width: 100%;
  height: 50vw;
  max-height: 280px;
`

export default function Video(props) {
  return (
    <Container>
      <VideoContainer>
        <IFrame
          src="https://www.youtube.com/embed/7cLrN68DEHU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
      <Text>SASH - Smile (Official Video)</Text>
    </Container>
  )
}
