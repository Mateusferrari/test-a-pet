// External Libraries
import React from 'react'

// Components
import { TableHeader } from './components/TableHeader'

// Styles
import { Container, TableBody } from './styles'


interface Props {
  // Props
}

export const Table: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  return (
    <Container>
      <TableHeader/>

      <TableBody></TableBody>
    </Container>
  )
}
