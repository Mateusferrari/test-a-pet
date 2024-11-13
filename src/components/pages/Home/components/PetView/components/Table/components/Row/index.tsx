// External Libraries
import React from 'react'

// Components
import { RowField } from './RowField'

// Utils
import {
  formatDate,
  formatPhoneNumber,
  formatVeterinaryName
} from '../../utils'

// Types
import { Scheduling } from 'src/dtos'

// Styles
import { Container, IconContainer, IconField } from './styles'
import { Icon } from '@components/toolkit/Icon'

interface Props {
  scheduling: Scheduling
  onClick: (schedule?: Scheduling) => void
  onDeletedClick: (e:React.MouseEvent<HTMLButtonElement>, scheduleId: string) => void
}

export const Row: React.FC<Props> = ({ scheduling, onClick, onDeletedClick}) => {
  return (
    <Container onClick={() => onClick(scheduling)}>
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

      <IconField>
        <IconContainer onClick={(e) => onDeletedClick(e, scheduling.id)}>
          <Icon src="/trash.svg"></Icon>
        </IconContainer>
      </IconField>
    </Container>
  )
}
