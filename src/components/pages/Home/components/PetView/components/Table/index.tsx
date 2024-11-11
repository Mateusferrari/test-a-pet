// External Libraries
import React from 'react'

// Hooks
import { useScheduling } from './hooks/useScheduling'

// Components
import { Row } from './components/Row'
import { TableHeader } from './components/TableHeader'

// Styles
import { Container, TableBody } from './styles'


export const Table: React.FC = (

) => {
  // Hooks
  const {data} = useScheduling({})

  // Functions
  function renderRows(){
    data.map(scheduling => <Row key={scheduling.id}/>)
  }

  return (
    <Container>
      <TableHeader/>

      <TableBody></TableBody>
    </Container>
  )
}
