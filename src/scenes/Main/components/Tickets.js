import React, { useState, useCallback } from "react"
import styled from "styled-components/macro"

import Text from "components/Text"
import Subtitle from "components/Subtitle"
import Image from "components/Image"
import tourImage from "assets/content/tour-poster.jpeg"

const Container = styled.div`
  text-align: center;
`

const Input = styled.input.attrs({ type: "text" })`
  color: #056782;
  font-weight: 900;
  letter-spacing: 1.3px;
  font-size: 1.3rem;
  background: white;
  padding: 1rem 1.5rem;
  border: none;
  flex: 1;
  box-sizing: content-box;
`

const Button = styled.button`
  color: white;
  background: #056782;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;
  transition: all 0.15s linear;

  padding: 1rem 1.5rem;

  &:hover {
    filter: brightness(1.2);
  }
`

const InputGroup = styled.form`
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  flex-wrap: wrap;
`

export default function Tickets(props) {
  const [email, setEmail] = useState("")

  const submitEmail = useCallback(
    e => {
      e.preventDefault()
      const emailURL = `https://gmail.us20.list-manage.com/subscribe/post?u=46393c00e1880f303878c9fb9&id=06f0c72b8d&EMAIL=${encodeURIComponent(
        email
      )}`

      window.open(emailURL)
    },
    [email]
  )

  return (
    <Container>
      <Image src={tourImage} />
      <Text>SASH in NY - 10.3.19 in NY</Text>
      <Subtitle>RSVP Below</Subtitle>
      <br />
      <br />
      <InputGroup onSubmit={submitEmail}>
        <Input onChange={e => setEmail(e.target.value)} value={email} />
        <Button action="submit">Submit</Button>
      </InputGroup>
    </Container>
  )
}
