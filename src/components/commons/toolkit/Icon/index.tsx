// External Libraries
import React from 'react'
import Image from 'next/image'

// Styles
import { Container } from './styles'

type Props = {
  src: string
  alt?: string
  size?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const Icon: React.FC<Props> = ({
  src,
  size = '1.25rem',
  alt = '',
  onClick
}) => {
  return (
    <Container size={size} onClick={onClick}>
      <Image fill alt={alt} src={src} sizes={size} draggable={false} />
    </Container>
  )
}
