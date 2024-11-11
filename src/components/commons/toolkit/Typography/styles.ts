import styled from 'styled-components'

interface Props {
  size?: string;
  color?: string;
  weight?: string | number;
}

export const Container = styled.div<Props>`
  font-size: ${({ size }) => size || '16px'};
  color: ${({ color, theme }) => color || theme.colors.black};
  font-weight: ${({ weight }) => weight || 'normal'};
`
