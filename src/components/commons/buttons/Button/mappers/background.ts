import { theme } from '@globals/theme'
import { ButtonVariant } from '../types'

export const BACKGROUND_COLOR_MAPPER: Record<ButtonVariant, string> = {
  filled: theme.colors.primary,
  outlined: theme.colors.white,
  text: theme.colors.white
}
