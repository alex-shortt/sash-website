import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Credits from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Credits />).toJSON()

  expect(tree).toMatchSnapshot()
})
