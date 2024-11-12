// External Libraries
import React from 'react'

// Components
import { RowField } from './RowField'

// Utils
import { formatDate, formatPhoneNumber, formatVeterinaryName } from '../../utils'

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
      <RowField
        value={formatDate(new Date(scheduling?.date.concat('T03:00:00.000Z')))}
      />

      <RowField value={scheduling?.hour} />

      <RowField value={scheduling?.pet?.name} />

      <RowField value={scheduling?.pet?.specie} />

      <RowField value={scheduling?.pet?.breed} />

      <RowField
        value={formatDate(
          new Date(scheduling?.pet?.dateOfBirth.concat('T03:00:00.000Z'))
        )}
      />

      <RowField value={scheduling?.pet?.owner?.name} />

      <RowField value={formatPhoneNumber(scheduling?.pet?.owner?.tel)} />

      <RowField value={formatVeterinaryName(scheduling?.veterinary?.name)} />
    </Container>
  )
}
