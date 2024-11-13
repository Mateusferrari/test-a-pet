import { defaultAnchors } from '@services/facepaint'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  row-gap: 2rem;
`

export const PageContent = styled.div`
  width: 100%;

  padding-inline-start: 2rem;

  display: grid;

  row-gap: 2rem;


  overflow: hidden;



  ${defaultAnchors({
  gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr', '1fr','1fr 30rem', '1fr 45rem;']
})}
`

export const Banner = styled.div`
  width: 100%;
  height: calc(100vh - 5.7rem);

  overflow: hidden;

  border-radius: 2rem;

  ${defaultAnchors({
  display: ['none', 'none', 'none', 'none', 'none','none',  'flex', 'flex']
})}
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 2rem;
  ${defaultAnchors({
  display: ['none', 'none', 'none', 'none', 'none', 'none', 'flex', 'flex']
})}
`
