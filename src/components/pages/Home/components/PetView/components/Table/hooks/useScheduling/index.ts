// Types
import { Scheduling } from 'src/dtos/Scheduling'
import { UseSchedulingParams } from './types'

export function useScheduling({ }: UseSchedulingParams) {
  // Constants
  const petMock: Scheduling[] = []

  // Functions

  return {
    data: petMock
  }
}
