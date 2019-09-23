import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components/macro"

export default styled.button`
  color: #056782;
  letter-spacing: 1.3px;
  font-size: 2rem;
  background: white;
  padding: 1rem 1.5rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.15s linear;
  box-shadow: 0px 0px 5px #03313fcc;

  &:hover {
    color: white;
    background: #056782;
  }
`
