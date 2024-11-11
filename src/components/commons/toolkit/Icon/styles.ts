import styled from 'styled-components'

type ContainerProps = {
  size?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  display: flex;
  position: relative;
  align-items: center;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};

  &:hover {
    filter: ${({ onClick }) => (onClick ? 'brightness(120%)' : 'none')};
  }
`
