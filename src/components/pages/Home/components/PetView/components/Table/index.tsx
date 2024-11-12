// External Libraries
import React from 'react'

// Hooks
import { useScheduling } from './hooks/useScheduling'

// Components
import { Row } from './components/Row'
import { TableHeader } from './components/TableHeader'

// Styles
import { Container, TableBody } from './styles'
import { Scheduling } from 'src/dtos'

interface Props {
  onRowClick: (schedule?: Scheduling) => void
}

export const Table: React.FC<Props> = ({onRowClick}) => {
  // Hooks
  const { data } = useScheduling({})

  // Functions
  function renderRows() {
    return data.map(scheduling => (
      <Row key={scheduling.id} scheduling={scheduling} onClick={onRowClick}/>
    ))
  }

  return (
    <Container>
      <TableHeader />

      <TableBody>{renderRows()}</TableBody>
    </Container>
  )
}
