// External Libraries
import React from 'react'

// Components
import { Loader } from '../Loader'

// Styles
import { Container } from './styles'

interface Props {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  size?: string
  color?: string
  weight?: string | number
  children: React.ReactNode
  isLoading?: boolean
}

export const Typography: React.FC<Props> = ({
  as = 'p',
  size,
  color,
  weight,
  children,
  isLoading
}) => {
  return (
    <>
      {isLoading ? (
        <Loader width='5rem' height='2rem' />
      ) : (
        <Container as={as} size={size} color={color} weight={weight}>
          {children}
        </Container>
      )}
    </>
  )
}
