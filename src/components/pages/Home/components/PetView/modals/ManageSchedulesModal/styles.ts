import { motion } from 'framer-motion'
import styled from 'styled-components'
import { defaultAnchors } from '@services/facepaint'

export const Container = styled(motion.div)`
  ${defaultAnchors({
  width: ['100vw', '100vw', '100vw', '100vw', '43rem', '43rem']
})}

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  overflow-y: auto;

  row-gap: 1.5rem;
  padding: 1.5rem;
  z-index: 10;

  background-color: #fff0f3;
  border-left: 1px solid ${({ theme }) => theme.colors.pink_pallete.dark};
`

export const Backdrop = styled(motion.div)`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  cursor: pointer;

  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);

  background-color: rgba(255, 182, 193, 0.2);
  z-index: 9;
`;

export const Form = styled.form`
  display: grid;
  grid-row-gap: 2rem;

  padding: 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 0.5rem;
`
