// External Libraries
import React from 'react'
import Select from 'react-select'

// Components
import { Option } from './types'

// Hooks
import { SPECIES_OPTIONS, VET_OPTIONS } from './constants'

// Styles
import { Container, ErrorMessage, Label } from './styles'

interface Props {
  type: 'vet' | 'specie'
  title: string
  errorMessage?: string
  onChange: (selectedOption: Option | null) => void
  value: Option | null
}

export const SelectGeneric: React.FC<Props> = ({
  type,
  title,
  errorMessage,
  value,
  onChange
}) => {
  return (
    <Container>
      <Label>{title}</Label>
      
      <Select
        options={type === 'specie' ? SPECIES_OPTIONS : VET_OPTIONS}
        value={value}
        onChange={onChange}
        placeholder="Selecione a espécie"
        isClearable
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderColor: errorMessage ? '#ff4d4f' : '#ccc',
            borderRadius: '8px',
            padding: '4px',
            boxShadow: state.isFocused ? '0 0 0 1px #4CAF50' : 'none'
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

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
}
