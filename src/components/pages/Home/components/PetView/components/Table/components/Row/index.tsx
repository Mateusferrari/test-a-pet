// External Libraries
import React from 'react'

// Components
import { RowField } from './RowField'

// Types
import { Scheduling } from 'src/dtos'

// Styles
import { Container } from './styles'

interface Props {
  scheduling: Scheduling
}

export const Row: React.FC<Props> = ({ scheduling }) => {
  return (
    <Container>
      <RowField value={scheduling?.date} />

      <RowField value={scheduling?.hour} />

      <RowField value={scheduling?.pet?.name} />

      <RowField value={scheduling?.pet?.specie} />

      <RowField value={scheduling?.pet?.breed} />

      <RowField value={scheduling?.pet?.dateOfBirth} />

      <RowField value={scheduling?.pet?.owner?.name} />

      <RowField value={scheduling?.pet?.owner?.tel} />

      <RowField value={scheduling?.veterinary?.name} />
    </Container>
  )
}
