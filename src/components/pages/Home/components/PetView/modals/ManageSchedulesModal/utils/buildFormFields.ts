import { Scheduling, Pet, Veterinary } from "src/dtos";
import { FormFields } from "../hooks/useManageSchedules/types";

export function buildFormFields(form: FormFields): Scheduling {
  const value = 10000;
  return {
    id: `${Date.now()}-${Math.floor(Math.random() * value)}`,
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
