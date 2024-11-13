import { API } from "@services/api"

export async function deleteScheduling(id: string) {
  const url = `Scheduling/${id}`

  const response = await API.delete(url)
  return response.data
}
