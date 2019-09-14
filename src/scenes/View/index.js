import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Intro from "scenes/Intro"

const Landing = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #598ac2, #639cdf);
`

const Gap = styled.div`
  width: 100%;
  height: 80vh;
  background: linear-gradient(180deg, #639cdf, #48c5ee);
`

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #48c5ee, #4dd2fa);
`

export default function View(props) {
  return (
    <>
      <Helmet title="Sash" />
      <Landing>
        <Intro />
      </Landing>
      <Gap />
      <Content />
    </>
  )
}
