import facepaint from 'facepaint'

export const defaultAnchors = facepaint([
  '@media(min-width: 321px)', // Mobile S
  '@media(min-width: 376px)', // Mobile M
  '@media(min-width: 426px)', // Mobile L
  '@media(min-width: 769px)', // Tablet
  '@media(min-width: 1026px)', // Laptop
  '@media(min-width: 1441px)', // Laptop L
  '@media(min-width: 2561px)' // 4K
])

export const simpleAnchors = facepaint([
  '@media(min-width: 769px)', // Mobile S
  '@media(min-width: 1026px)', // Laptop
  '@media(min-width: 1441px)', // Laptop L
  '@media(min-width: 2561px)' // 4K
])
