import React from "react"

import Helmet from "components/Helmet"
import Landing from "scenes/Landing"
import Bridge from "scenes/Bridge"
import Content from "scenes/Content"

export default function View(props) {
  return (
    <>
      <Helmet title="Sash" />
      <Landing />
      <Bridge />
      <Content />
    </>
  )
}
