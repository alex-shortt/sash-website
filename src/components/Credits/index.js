import React, { useState, useEffect } from "react"
import styled from "styled-components/macro"

export default function Credits(props) {
  const [printed, setPrinted] = useState("false")

  useEffect(() => {
    if (printed !== "true") {
      console.log(`
 ______     ______     ______     __  __
/\\  ___\\   /\\  __ \\   /\\  ___\\   /\\ \\_\\ \\
\\ \\___  \\  \\ \\  __ \\  \\ \\___  \\  \\ \\  __ \\
 \\/\\_____\\  \\ \\_\\ \\_\\  \\/\\_____\\  \\ \\_\\ \\_\\
  \\/_____/   \\/_/\\/_/   \\/_____/   \\/_/\\/_/

Site Design + Development by Alex Shortt
  insta: https://instagram.com/alexander.shortt
  twit: https://twitter.com/_alexshortt
      `)
      setPrinted("true")
    }
  }, [printed])

  return <></>
}
