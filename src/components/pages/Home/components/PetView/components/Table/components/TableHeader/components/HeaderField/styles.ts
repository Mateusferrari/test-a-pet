import styled from 'styled-components'

export const Container = styled.th`
  padding: 1rem;

  color: white;
  text-align: center;
  font-weight: bold;
  
  border-bottom: 1px solid #ddd;

  &:first-child {
    border-top-left-radius: 0.5rem;
  }

  &:last-child {
    border-top-right-radius: 0.5rem;
  }
`
