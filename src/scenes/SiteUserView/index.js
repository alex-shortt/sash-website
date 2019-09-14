import React from "react"
import styled from "styled-components/macro"
import { Redirect, Route, Switch } from "react-router-dom"

const View = React.lazy(() => import("scenes/View"))

export default function SiteUserView() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={View} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}
