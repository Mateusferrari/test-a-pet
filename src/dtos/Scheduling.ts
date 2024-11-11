// Types
import { Pet, Veterinary } from "."


export interface Scheduling {
  id: string
  pet: Pet
  veterinary: Veterinary
  date: string
  hour: string
}
