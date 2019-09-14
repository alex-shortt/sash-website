import React from "react"
import styled from "styled-components/macro"

import Helmet from "components/Helmet"
import Intro from "scenes/Intro"
import { Landing, Gap, Content } from "components/Containers"

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
