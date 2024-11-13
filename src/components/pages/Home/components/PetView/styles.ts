import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;


  display: flex;

  flex-direction: column;
  gap: 2rem;



`
export const NoteContainer = styled.div`
  background-color: #f9f9f9;
  border-left: 4px solid ${({ theme }) => theme.colors.pink_pallete.dark};
  padding: 1rem;
  font-size: 1rem;
  color: #333;

`;

export const NoteText = styled.p`
  margin: 0;
`;

export const Scroll = styled.div`
  max-height: 70vh;
  max-width: calc(100vw - 5rem);

  overflow: auto;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 182, 193, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 182, 193, 0.3);
      border-radius: 20px;

    }

`
