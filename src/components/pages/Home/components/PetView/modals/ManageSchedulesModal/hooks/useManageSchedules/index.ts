// External Libraries
import { useState } from 'react'

// Hooks


// Utils
import { buildSchedule } from './utils/buildSchedule'
import { makeInitialErrors, makeInitialFields } from './utils'

// Types
import { Scheduling } from 'src/dtos'
import { FormFields, UseManageSchedulesParams } from './types'


export function useManageSchedules({ }: UseManageSchedulesParams) {

  // States
  const [visible, setVisible] = useState(false)
  const [scheduleId, setScheduleId] = useState('')
  const [loading, setLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [errors, setErrors] = useState(makeInitialErrors)
  const [formFields, setFormFields] = useState(makeInitialFields)

  // Functions
  function handleRefMethods() {
    return { open: handleOpen, close: handleClose }
  }

  function handleOpen(schedule?: Scheduling) {
    if (schedule) {
      setIsEditing(true)
      setFormFields(buildSchedule(schedule))
      setScheduleId(schedule.id)
    }
    setVisible(true)
  }

  function handleClose() {
    setVisible(false)


    setIsEditing(false)
    setErrors(makeInitialErrors)
    setFormFields(makeInitialFields)
  }

  function handleFieldChange(updated: Partial<FormFields> ) {
    for (const key in updated) {
      if (key in errors) setErrors(prev => ({ ...prev, [key]: '' }))
    }

    setFormFields(prev => ({ ...prev, ...updated }))
  }

  return { formFields, errors, visible, handleClose, handleRefMethods, handleFieldChange, isEditing, loading}
}
