// Types
import { Pet } from "./Pet";
import { Veterinary } from "./Veterinary";

export interface Scheduling {
  id: string
  pet: Pet
  veterinary: Veterinary
  date: string
  hour: string
}
