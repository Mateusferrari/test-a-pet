'use client'
// External LIbraries
import useSWR from 'swr'
import { toast as notifyToast } from 'react-toastify';

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
      notifyToast.success('Agendamentos listados com sucesso', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
        style: {
          fontSize: '14px',
          padding: '10px 15px',
          maxWidth: '400px'
        }
      });
      return response

    } catch (error) {
      notifyToast.error('Erro ao listar agendamento', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
        style: {
          fontSize: '14px',
          padding: '10px 15px',
          maxWidth: '400px'
        }
      });
    }


  }

  async function deleted(e: React.MouseEvent<HTMLButtonElement>, scheduleId: string) {
    e.stopPropagation()

    if (!scheduleId) return

    try {
      await deleteScheduling(scheduleId)
      await mutate()

      notifyToast.success('Agendamento deletado com sucesso', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
        style: {
          fontSize: '14px',
          padding: '10px 15px',
          maxWidth: '400px'
        }
      });
    } catch (error) {

      notifyToast.error('Erro ao deletar agendamento', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
        style: {
          fontSize: '14px',
          padding: '10px 15px',
          maxWidth: '400px'
        }
      });
    }

  }

  return {
    deleted,
    data,
    isLoading,
    refreshSchedules: mutate
  }
}
