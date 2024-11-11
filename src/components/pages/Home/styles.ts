import { defaultAnchors } from '@services/facepaint'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 2rem;
`

export const PageContent = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 30rem;

  row-gap: 2rem;


  ${defaultAnchors({
  gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr', '1fr', '1fr 50rem;']
})}
`

export const Banner = styled.div`
  width: 100%;
  height: 100vh;

  border-radius: 2rem;

  ${defaultAnchors({
  display: ['none', 'none', 'none', 'none', 'none', 'flex']
})}
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 2rem;
`
