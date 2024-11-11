// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

interface Props {
  value: string
}

export const HeaderField: React.FC<Props> = ({ value }) => {
  return (
    <Container>
      <Typography>{value}</Typography>
    </Container>
  )
}
