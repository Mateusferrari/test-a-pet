import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
`;

export const Asterisk = styled.span`
  color: red;
  margin-left: 0.25rem;
`;

export const ErrorText = styled.span`
  color: #ff5e5e;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;


interface StyledInputProps {
  hasError: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;


  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #ff5e5e;
    `}

  &:focus {
    border-color: ${({ hasError }) => (hasError ? '#ff5e5e' : '#4CAF50')};
  }
`;
