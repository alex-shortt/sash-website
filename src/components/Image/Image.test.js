import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Image from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Image />).toJSON()

  expect(tree).toMatchSnapshot()
})
