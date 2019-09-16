import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Subtitle from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Subtitle />).toJSON()

  expect(tree).toMatchSnapshot()
})
