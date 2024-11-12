// External Libraries
import React from 'react'

// Styles
import { Asterisk, Container, ErrorText, Label, StyledInput } from './styles'

interface Props {
  title: string
  value: string
  required?: boolean
  type?: string
  errorMessage?: string
  placeholder?: string
  onChange: (value: string) => void
}

export const Input: React.FC<Props> = ({
  title,
  required,
  type = 'text',
  value,
  errorMessage,
  placeholder,
  onChange
}) => {
  return (
    <Container>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <Label>
        {title}
        {required && <Asterisk>*</Asterisk>}
      </Label>

      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        hasError={!!errorMessage}
        aria-invalid={!!errorMessage}
      />
    </Container>
  )
}
