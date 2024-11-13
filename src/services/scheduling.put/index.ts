import { API } from "@services/api"
import { PutPayload } from "./request"


export async function putSchedule(id: string, payload: PutPayload) {
  const url = `Scheduling/${id}`

  const response = await API.put(url, payload)
  return response.data
}
