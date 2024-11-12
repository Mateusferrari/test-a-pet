import { FormErrors } from "../types/formErrors";

export function makeInitialErrors(): FormErrors {
  return {
    date: '', hour: '', name: '', specie: '', breed: '',
    birth: '', owner: '', tel: '', vet: ''
  }
}
