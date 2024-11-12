

export interface ButtonProps extends ButtonStyleProps, ButtonTextProps {
  loading?: boolean
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'

  onClick?: () => void
}

export interface ButtonTextProps {
  label: string

  labelColor?: string

  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export interface ButtonStyleProps {
  color?: string
  fitWidth?: boolean
  variant?: ButtonVariant
}

export type ButtonVariant = 'filled' | 'outlined' | 'text'
