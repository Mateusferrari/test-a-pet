// External Libraries
import React from 'react'

// Components

// Styles
import { Container, HeaderRow } from './styles'
import { HeaderField } from './components/HeaderField'

interface Props {
  // Props
}

export const TableHeader: React.FC<Props> = ({/* Props */}) => {
  return <Container>
      <HeaderRow>
          <HeaderField />

          <HeaderField />

          <HeaderField />

          <HeaderField />

          <HeaderField />
        </HeaderRow>
  </Container>
}
