// External Libraries
import React from 'react'

// Components
import { HeaderField } from './components/HeaderField'

// Styles
import { Container, HeaderRow } from './styles'

export const TableHeader: React.FC = () => {
  return (
    <Container>
      <HeaderRow>
        <HeaderField value="Data" />

        <HeaderField value="Horário" />

        <HeaderField value="Nome" />

        <HeaderField value="Espécie" />

        <HeaderField value="Raça" />

        <HeaderField value="Nascimento" />

        <HeaderField value="Proprietário" />

        <HeaderField value="Contato" />

        <HeaderField value="Veterinário" />

        <HeaderField value="" />
      </HeaderRow>
    </Container>
  )
}
