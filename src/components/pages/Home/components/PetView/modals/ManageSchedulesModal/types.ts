import { Scheduling } from "src/dtos"

export interface ManageSchedulesModalMethods {
  open: (schedule?: Scheduling) => void
  close: () => void
}

export interface ManageSchedulesModalProps {
  refreshSchedules: () => void
}
