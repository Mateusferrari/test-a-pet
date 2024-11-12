// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'

interface Props {
  width: string
  height: string
  color?: string
  borderRadius?: string
}

export const Loader: React.FC<Props> = ({ color, width, height, borderRadius }) => {
  return (
    <Container
      $color={color}
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
    ></Container>
  )
}
