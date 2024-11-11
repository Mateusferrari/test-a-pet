import styled, { keyframes } from 'styled-components'

interface Props {
  $width?: string
  $height?: string
  $borderRadius?: string

}

const moveBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const Container = styled.div<Props>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  background: linear-gradient(270deg, #ff6b6b, #f5e6ca, #4ecdc4);
  background-size: 400% 400%;
  animation: ${moveBackground} 2s ease infinite;

  border-radius: ${({theme, $borderRadius }) => $borderRadius ? $borderRadius : theme.borderRadius.none}


`
