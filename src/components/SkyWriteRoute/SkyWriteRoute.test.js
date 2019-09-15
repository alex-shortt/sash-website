import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import SkyWriteRoute from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<SkyWriteRoute />).toJSON()

  expect(tree).toMatchSnapshot()
})
