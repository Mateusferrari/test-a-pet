import { theme } from '@globals/theme'
import { ButtonVariant } from '../types'

export const LABEL_COLOR_MAPPER: Record<ButtonVariant, string> = {
  filled: theme.colors.white,
  outlined: theme.colors.primary,
  text: theme.colors.primary
}
