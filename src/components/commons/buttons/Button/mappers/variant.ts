import { RuleSet, css } from 'styled-components'
import { ButtonVariant } from '../types'
import { theme } from '@globals/theme'

export function mapVariantToCss(
  variant: ButtonVariant,
  color?: string
): RuleSet {
  const buttonColor = color || theme.colors.primary

  if (variant === 'filled') {
    return css`
      background-color: ${buttonColor};
      border: 1px solid ${buttonColor};

      &:not(:disabled) {
        &:hover {
          background-color: ${buttonColor}D9;
        }
      }
    `
  }

  if (variant === 'outlined') {
    return css`
      background-color: white;
      border: 1px solid ${buttonColor};

      &:not(:disabled) {
        &:hover {
          background-color: ${({ theme }) => theme.colors.hover};
        }
      }
    `
  }

  if (variant === 'text') {
    return css`
      border: none;
      background-color: white;

      &:not(:disabled) {
        &:hover {
          background-color: ${({ theme }) => theme.colors.hover};
        }
      }
    `
  }

  return css``
}
