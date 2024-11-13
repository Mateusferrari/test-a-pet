import { FormFields } from "../types";


export function makeInitialFields(): FormFields {
  return {
    date: '', hour: '', name: '', specie: {
      value: '',
      label: ''
    },
    breed: '',
    birth: '', owner: '', tel: '', vet: {
      value: '',
      label: ''
    }
  }
}
