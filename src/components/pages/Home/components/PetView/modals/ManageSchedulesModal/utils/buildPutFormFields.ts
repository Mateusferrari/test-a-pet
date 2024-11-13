import { FormFields } from "../hooks/useManageSchedules/types";
import { PutPayload } from "@services/scheduling.put/request";

export function buildFormFields(form: FormFields): PutPayload {
  return {
    date: form.date,
    hour: form.hour,
    pet: {
      name: form.name,
      dateOfBirth: form.birth,
      specie: form.specie.label,
      breed: form.breed,
      owner: {
        name: form.owner,
        tel: form.tel
      }
    },
    veterinary: {
      name: form.vet.label,
      crm: ''
    }
  }
}
