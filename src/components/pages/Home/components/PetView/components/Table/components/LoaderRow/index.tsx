// External Libraries
import React from 'react'

// Components
import { Loader } from '@components/toolkit/Loader'

// Styles
import { Container } from './styles'

export const LoaderRow: React.FC = () => {
  // Functions
  function renderRows() {
    return Array.from({ length: 10 }).map((_, index) => (
      <Loader key={`skeleton_${index}`} width="100%" height="3rem" />
    ))
  }

  return <Container>{renderRows()}</Container>
}
