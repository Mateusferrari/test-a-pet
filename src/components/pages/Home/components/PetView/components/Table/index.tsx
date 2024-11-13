// External Libraries
import React from 'react'

// Components
import { Row } from './components/Row'
import { TableHeader } from './components/TableHeader'

// Types
import { Scheduling } from 'src/dtos'

// Styles
import { Container, TableBody } from './styles'
import { LoaderRow } from './components/LoaderRow'


interface Props {
  schedules?: Scheduling[]
  isLoading?: boolean
  onRowClick: (schedule?: Scheduling) => void
  onDeletedClick: (e: React.MouseEvent<HTMLButtonElement>, scheduleId: string) => void
}

export const Table: React.FC<Props> = ({ schedules, isLoading, onRowClick, onDeletedClick }) => {
  // Functions
  function renderRows() {
    if(isLoading) return <LoaderRow/>

    if (!schedules || !schedules.length) return null

    return schedules?.map((scheduling) => (
      <Row key={scheduling?.id} scheduling={scheduling} onClick={onRowClick} onDeletedClick={onDeletedClick}/>
    ))
  }

  return (
    <Container>
      <TableHeader />
      <TableBody>{renderRows()}</TableBody>
    </Container>
  )
}

