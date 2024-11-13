// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'

export const EmptyMessage: React.FC = () => {
  return (
    <Container>
      <Typography>Nenhum agendamento encontrado</Typography>
    </Container>
  )
}
