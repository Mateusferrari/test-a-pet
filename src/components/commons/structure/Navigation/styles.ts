import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;

  padding: 0.75rem 5rem;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  background-color: rgba(247, 163, 153, 0.5);

  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.default};

`
