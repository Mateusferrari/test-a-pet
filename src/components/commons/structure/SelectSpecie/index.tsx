// External Libraries
import React from 'react'
import Select from 'react-select'

// Components
import { SpeciesOption } from './types'

// Hooks
import { SPECIES_OPTIONS } from './constants'

interface Props {
  onChange: (selectedOption: SpeciesOption | null) => void
  value: SpeciesOption | null
}

export const SelectSpecie: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Select
      options={SPECIES_OPTIONS}
      value={value}
      onChange={onChange}
      placeholder="Selecione a espécie"
      isClearable
      styles={{
        control: provided => ({
          ...provided,
          borderColor: '#ccc',
          borderRadius: '8px',
          padding: '4px'
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? 'white' : 'black',
          backgroundColor: state.isSelected ? '#4CAF50' : 'white',
          '&:hover': {
            backgroundColor: '#e0e0e0'
          }
        })
      }}
    />
  )
}
