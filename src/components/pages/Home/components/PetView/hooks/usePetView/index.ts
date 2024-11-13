'use client'
// External LIbraries
import useSWR from 'swr'
import { toast } from 'react-toastify'

// Services
import { getScheduling } from '@services/scheduling.get'

// Types
import { UsePetViewParams } from './types'

export function usePetView({ }: UsePetViewParams) {
  const { data, isLoading, mutate } = useSWR(
    '/Scheduling',
    fetchListSchedules,
    { revalidateOnFocus: false, fallbackData: [] }
  )

  // Functions
  async function fetchListSchedules() {
    try {
      const response = await getScheduling()
      return response
    } catch (error) {
      toast.error('Erro ao mostrar agendamentos')
    }
  }

  return {
    data,
    isLoading,
    refreshSchedules: mutate
  }
}
