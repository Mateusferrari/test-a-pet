import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borders.default};
`
