// External Libraries
import React from 'react'

// Components
import { Loader } from '@components/toolkit/Loader'

// Utils
import { BACKGROUND_COLOR_MAPPER } from '../../mappers/background'

// Types
import { ButtonVariant } from '../../types'

// Styles
import { Container } from './styles'
import { theme } from '@globals/theme'

type Props = {
  color?: string
  variant: ButtonVariant
}

export const ButtonLoader: React.FC<Props> = ({ color, variant }) => {
  // Constants
  const background = color || BACKGROUND_COLOR_MAPPER[variant]

  // Functions
  function getLoaderColor() {
    if (color) return color
    if (variant === 'filled') return 'white'
    return theme.colors.primary
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      $color={background}
    >
      <Loader color={getLoaderColor()} />
    </Container>
  )
}
