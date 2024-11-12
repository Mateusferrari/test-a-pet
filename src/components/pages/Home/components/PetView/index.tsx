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
import { Container } from './styles'

interface Props {
  // Props
}

export const PetView: React.FC<Props> = (
  {
    /* Props */
  }
) => {
  // Refs
  const manageScheduleModalRef = useRef<ManageSchedulesModalMethods>(null)

  // Functions
  function openModal(schedule?: Scheduling) {
    manageScheduleModalRef.current?.open(schedule)
  }

  return (
    <Container>
      <Button label={'Adicionar novo Agendamento'} onClick={openModal} />
      <Table onRowClick={openModal} />

      <ManageSchedulesModal ref={manageScheduleModalRef} />
    </Container>
  )
}
