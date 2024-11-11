// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'

interface Props {
  width: string
  height: string
  borderRadius?: string
}

export const Loader: React.FC<Props> = ({ width, height, borderRadius }) => {
  return (
    <Container
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
    ></Container>
  )
}
