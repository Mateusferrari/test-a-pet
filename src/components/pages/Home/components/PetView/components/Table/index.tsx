// External Libraries
import React from 'react'

// Components
import { Row } from './components/Row'
import { TableHeader } from './components/TableHeader'

// Types
import { Scheduling } from 'src/dtos'

// Styles
import { Container, TableBody } from './styles'


interface Props {
  schedules?: Scheduling[]
  onRowClick: (schedule?: Scheduling) => void
}

export const Table: React.FC<Props> = ({ schedules, onRowClick }) => {
  // Functions
  function renderRows() {
    if (!schedules || !schedules.length) return null

    return schedules?.map((scheduling) => (
      <Row key={scheduling?.id} scheduling={scheduling} onClick={onRowClick} />
    ))
  }

  return (
    <Container>
      <TableHeader />
      <TableBody>{renderRows()}</TableBody>
    </Container>
  )
}

