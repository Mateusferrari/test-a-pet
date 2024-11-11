// Types
import { Scheduling } from 'src/dtos/Pet/Scheduling'
import { UseSchedulingParams } from './types'

export function useScheduling({}: UseSchedulingParams) {
  // Constants
  const petMock: Scheduling[] = []

  // Functions

  return {
    data: petMock
  }
}
