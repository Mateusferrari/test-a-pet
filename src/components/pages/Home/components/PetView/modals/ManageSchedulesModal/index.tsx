// External Libraries
import React, { useImperativeHandle } from 'react'
import { AnimatePresence } from 'framer-motion'

// Components
import { Input } from '@components/structure/Input'
import { SelectGeneric } from '@components/structure/SelectGeneric'
import { Option } from '@components/structure/SelectGeneric/types'
import { Button } from '@components/buttons/Button'

// Hooks
import { useManageSchedules } from './hooks/useManageSchedules'
import { BACKDROP_ANIMATION, SIDE_PANEL_ANIMATION } from './constants'

// Types
import { ManageSchedulesModalProps, ManageSchedulesModalMethods } from './types'

// Styles
import { Backdrop, ButtonsContainer, Container, Form } from './styles'

export const ManageSchedulesModal = React.forwardRef<
  ManageSchedulesModalMethods,
  ManageSchedulesModalProps
>((props, ref) => {
  // Hooks
  const {
    visible,
    handleClose,
    handleRefMethods,
    formFields,
    errors,
    handleFieldChange,
    isEditing,
    loading
  } = useManageSchedules(props)
  useImperativeHandle(ref, handleRefMethods)

  // Functions
  function handleSubmit() {
    console.log()
  }

  return (
    <AnimatePresence initial={false}>
      {visible ? (
        <>
          <Container {...SIDE_PANEL_ANIMATION}>
            <Form onSubmit={handleSubmit}>
              <Input
                required
                title="Data do agendamento"
                type="date"
                value={formFields.date}
                errorMessage={errors.date}
                placeholder="Insira a data de agendamento"
                onChange={v => handleFieldChange({ date: v })}
              />

              <Input
                required
                title="Hora do agendamento"
                type="hour"
                value={formFields.hour}
                errorMessage={errors.hour}
                placeholder="Insira o horário de agendamento"
                onChange={v => handleFieldChange({ hour: v })}
              />

              <Input
                required
                disabled={isEditing}
                title="Nome do pet"
                type="text"
                value={formFields.name}
                errorMessage={errors.name}
                placeholder="Digite o nome do pet aqui"
                onChange={v => handleFieldChange({ name: v })}
              />

              <SelectGeneric
                disabled={isEditing}
                type="specie"
                onChange={v => handleFieldChange({ specie: v as Option })}
                value={formFields.specie}
                title={'Espécie do pet'}
                errorMessage={errors.specie}
              />

              <Input
                required
                disabled={isEditing}
                title="Raça do pet"
                type="text"
                value={formFields.breed}
                errorMessage={errors.breed}
                placeholder="Digite o nome do pet aqui"
                onChange={v => handleFieldChange({ breed: v })}
              />

              <Input
                required
                disabled={isEditing}
                title="Data de nascimento"
                type="date"
                value={formFields.birth}
                errorMessage={errors.birth}
                placeholder="Insira a data de nascimento"
                onChange={v => handleFieldChange({ birth: v })}
              />

              <Input
                required
                disabled={isEditing}
                title="Nome do Proprietário"
                type="date"
                value={formFields.owner}
                errorMessage={errors.owner}
                placeholder="Insira a data de nascimento"
                onChange={v => handleFieldChange({ owner: v })}
              />

              <Input
                required
                title="Telefone do Proprietário"
                type="date"
                value={formFields.tel}
                errorMessage={errors.tel}
                placeholder="Insira o telefone de contato"
                onChange={v => handleFieldChange({ tel: v })}
              />

              <SelectGeneric
                disabled={isEditing}
                type="vet"
                onChange={v => handleFieldChange({ vet: v as Option })}
                value={formFields.vet}
                title={''}
                errorMessage={errors.vet}
              />

              <ButtonsContainer>
                <Button
                  type="button"
                  label="Cancelar"
                  variant="outlined"
                  onClick={handleClose}
                />

                <Button
                  type="submit"
                  variant="filled"
                  loading={loading}
                  label={isEditing ? 'Editar' : 'Adicionar'}
                />
              </ButtonsContainer>
            </Form>
          </Container>
          <Backdrop
            role="button"
            {...BACKDROP_ANIMATION}
            onClick={handleClose}
          />
        </>
      ) : null}
    </AnimatePresence>
  )
})

ManageSchedulesModal.displayName = 'ManageSchedulesModal'
