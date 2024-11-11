// External Libraries
import React from 'react'

// Components
import { Icon } from '@components/toolkit/Icon'

// Styles
import { Container } from './styles'
import { Typography } from '@components/toolkit/Typography'
import { theme } from '@globals/theme'

export const Navigation: React.FC = () => {
  return (
    <Container>
      <Icon size="2rem" src="/favicon/dog.svg" />
      <Typography as='h1' color={theme.colors.pink_pallete.dark} size='1.25rem' weight={700}>Test a pet</Typography>
    </Container>
  )
}
