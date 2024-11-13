import { Pet, Veterinary } from "src/dtos"

export interface PutPayload {
  pet: Pet
  veterinary: Veterinary
  date: string
  hour: string
}
