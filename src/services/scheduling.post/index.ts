import { API } from "@services/api"
import { Payload } from "./request"


export async function postSchedule(payload: Payload){
  const url = '/Scheduling'

  const response = await API.post(url, payload)
  return response.data
}
