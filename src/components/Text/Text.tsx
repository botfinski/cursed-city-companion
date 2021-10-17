import React from "react"
import styled from "styled-components"

interface Props {
  variant?: string
  className?: string
}

const H1 = styled.h1`
  font-size: 3em;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.h1};
  font-weight: normal;
`

const H2 = styled.h2`
  font-size: 2em;
  margin: 0 auto;
  font-family: ${props => props.theme.typography.h2};
  font-weight: normal;
`

const P = styled.p`
  font-size: 1em;
  margin: 0 0 0.5rem 0;
  color: ${props => props.theme.color};
`

const Text: React.FC<Props> = ({ variant, children }) => {
  switch (variant) {
    case "h1":
      return <H1>{children}</H1>
    case "h2":
      return <H2>{children}</H2>
    case "body":
      return <P>{children}</P>
    default:
      return <span>{children}</span>
  }
}

export default Text
