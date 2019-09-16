import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

export default styled.button`
  color: #056782;
  font-weight: 900;
  letter-spacing: 1.3px;
  font-size: 2rem;
  background: white;
  padding: 1rem 1.5rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.15s linear;

  &:hover {
    color: white;
    background: #056782;
  }
`
