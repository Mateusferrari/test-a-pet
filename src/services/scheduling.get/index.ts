import { API } from "@services/api"
import { HttpResponse } from "./response"

export async function getScheduling(){
  const url = '/Scheduling'

  const response = await API.get<HttpResponse>(url)
  return response.data
}
