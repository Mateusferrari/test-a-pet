// External Libraries
import React from 'react'

// Components
import { PetView } from './components/PetView'
import { Head } from '@components/structure/Head'
import { Navigation } from '@components/structure/Navigation'

// Styles
import { Banner, BannerImage, Container, PageContent } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Head title="Home" image="/favicon/dog.svg" />
      <Navigation />

      <PageContent>
        <PetView/>

        <Banner>
          <BannerImage
            src="/banner/bannerCat.png"
            alt="A imagem mostra um gato branco com pelos macios e olhos grandes e brilhantes, de cor rosada.
             Ele tem uma expressão adorável e levemente curiosa.
             Na cabeça, o gato usa um laço rosa, que dá um toque delicado e fofo à sua aparência.
             As orelhas são felpudas, e os detalhes do focinho e do nariz são em um tom de rosa suave, combinando com o laço e os olhos.
             A imagem tem um fundo transparente."
          />
        </Banner>
      </PageContent>
      
    </Container>
  )
}
