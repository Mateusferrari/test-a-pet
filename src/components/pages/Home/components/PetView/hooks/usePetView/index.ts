'use client'
// External LIbraries
import useSWR from 'swr'
import { toast } from 'react-toastify'

// Services
import { getScheduling } from '@services/scheduling.get'

// Types
import { UsePetViewParams } from './types'
import { deleteScheduling } from '@services/scheduling.delete'


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

  async function deleted(e: React.MouseEvent<HTMLButtonElement>,scheduleId: string){
    e.stopPropagation()

    if(!scheduleId) return

    try {
      await deleteScheduling(scheduleId)
      mutate()
    } catch (error) {
      toast.error('Erro ao deletar agendamento')
    }

  }

  return {
    deleted,
    data,
    isLoading,
    refreshSchedules: mutate
  }
}
