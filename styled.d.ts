import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsWildcards
    padding: Record<PaddingWildcard, string>
    borderRadius: Record<RadiusWildcard, string>
  }

  export type PaddingWildcard =
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'p5'
    | 'p6'
    | 'p7'
    | 'p8'

  export type RadiusWildcard = 'button' | 'card' | 'input' | 'modal' | 'none'

  export interface ColorsWildcards {
    primary: string
    secondary: string
    text: {
      primary: string
      secondary: string
    }
    white: string
    black: string
    hover: string
    borders: {
      default: string

    }
    pink_pallete: {
      light: string
      medium: string
      dark: string
      coral: string
    }
  }
}
