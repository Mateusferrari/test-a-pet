import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;
  gap: 2rem;

`
export const NoteContainer = styled.div`
  background-color: #f9f9f9;
  border-left: 4px solid ${({theme}) => theme.colors.pink_pallete.dark};
  padding: 1rem;
  font-size: 1rem;
  color: #333;

`;

export const NoteText = styled.p`
  margin: 0;
`;
