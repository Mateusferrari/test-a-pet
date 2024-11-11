// External Libraries
import React from 'react'

// Components
import { HeaderField } from './components/HeaderField'

// Styles
import { Container, HeaderRow } from './styles'

export const TableHeader: React.FC = (

) => {
  return (
    <Container>
      <HeaderRow>
        <HeaderField value='Data da consulta' />

        <HeaderField value='Hora da Consulta' />

        <HeaderField value='Nome' />

        <HeaderField value='Data de nascimento' />

        <HeaderField value='Proprietário'/>

        <HeaderField value='Telefone de contato' />

        <HeaderField value='Veterinário' />
      </HeaderRow>
    </Container>
  )
}
