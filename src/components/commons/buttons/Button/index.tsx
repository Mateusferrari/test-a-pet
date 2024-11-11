// External Libraries
import React from 'react'

// Components
import { ButtonContent } from './components/ButtonContent'

// Types
import { ButtonProps } from './types'

// Styles
import { Container } from './styles'

export const Button: React.FC<ButtonProps> = ({
  type,
  color,
  fitWidth,
  disabled,
  variant = 'filled',
  onClick,
  ...rest
}) => {
  // Functions
  function handleButtonClick() {
    if (!disabled && !rest.loading && onClick) onClick()
  }

  return (
    <Container
      type={type}
      $color={color}
      $variant={variant}
      disabled={disabled}
      $fitWidth={fitWidth}
      $loading={rest.loading}
      onClick={handleButtonClick}
    >
      <ButtonContent variant={variant} {...rest} />
    </Container>
  )
}
