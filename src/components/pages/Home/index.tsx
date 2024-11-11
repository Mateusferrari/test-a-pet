// External Libraries
import React from 'react'

// Components
import { Head } from '@components/structure/Head'
import { Navigation } from '@components/structure/Navigation'

// Styles
import { Container, PageContent } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Head title="Home" image='/favicon/dog.svg' />
      <Navigation />

      <PageContent></PageContent>
    </Container>
  )
}
