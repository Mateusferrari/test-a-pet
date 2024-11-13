// External Libraries
import React, { useRef } from 'react'

// Components
import { Table } from './components/Table'
import { Button } from '@components/buttons/Button'
import { ManageSchedulesModal } from './modals/ManageSchedulesModal'

// Types
import { Scheduling } from 'src/dtos'
import { ManageSchedulesModalMethods } from './modals/ManageSchedulesModal/types'

// Styles
import { Container, NoteContainer, NoteText, Scroll } from './styles'
import { usePetView } from './hooks/usePetView'
import { EmptyMessage } from './components/Table/components/EmptyMessage'
import { ToastContainer } from 'react-toastify'

export const PetView: React.FC = () => {
  // Refs
  const manageScheduleModalRef = useRef<ManageSchedulesModalMethods>(null)

  // Hooks
  const { data, refreshSchedules, isLoading, deleted } = usePetView({})

  // Functions
  function openModal(schedule?: Scheduling) {
    manageScheduleModalRef.current?.open(schedule)
  }

  return (
    <Container>
      <NoteContainer>
        <NoteText>
          Para editar um elemento, basta clicar no item desejado na tabela e um
          modal será aberto para edição.
        </NoteText>
      </NoteContainer>

      <ToastContainer position="top-center" autoClose={5000} />

      <Button label={'Adicionar novo Agendamento'} onClick={openModal} />

      {!data || !data.length ? (
        <EmptyMessage />
      ) : (
        <Scroll>
          <Table schedules={data} onRowClick={openModal} isLoading={isLoading} onDeletedClick={deleted}/>
        </Scroll>
      )}

      <ManageSchedulesModal ref={manageScheduleModalRef} refreshSchedules={refreshSchedules} />
    </Container>
  )
}
