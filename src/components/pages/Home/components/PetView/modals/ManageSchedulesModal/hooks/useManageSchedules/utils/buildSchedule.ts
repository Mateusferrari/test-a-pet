import { Scheduling } from "src/dtos";
import { FormFields } from "../types";

export function buildSchedule(schedule: Scheduling): FormFields{
return {
  name: schedule.pet.name,
  date: schedule.date,
  hour: schedule.hour,
  specie: {
    label: schedule.pet.specie,
    value: schedule.pet.specie,
  },

  breed: schedule.pet.breed,
  birth: schedule.pet.dateOfBirth,
  owner: schedule.pet.owner.name,
  tel: schedule.pet.owner.tel,
  vet: {
    label: schedule.veterinary.name,
    value: schedule.veterinary.crm
  }
}
}
