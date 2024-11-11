// Types
import { Scheduling } from 'src/dtos/Scheduling'
import { UseSchedulingParams } from './types'

export function useScheduling({ }: UseSchedulingParams) {
  // Constants
   const petMock: Scheduling[] = [
    {
      id: "1",
      pet: {
        name: "Bella",
        breed: "Labrador",
        dateOfBirth: "2020-03-15",
        specie: "Dog",
        gender: "Female",
        owner: {
          name: "Alice Johnson",
          tel: "+1 123-456-7890",
        },
      },
      veterinary: {
        name: "Dr. Robert Smith",
        crm: "CRM123456",
      },
      date: "2024-11-20",
      hour: "10:00",
    },
    {
      id: "2",
      pet: {
        name: "Max",
        breed: "Siamese",
        dateOfBirth: "2019-06-22",
        specie: "Cat",
        gender: "Male",
        owner: {
          name: "John Doe",
          tel: "+1 987-654-3210",
        },
      },
      veterinary: {
        name: "Dr. Emily Taylor",
        crm: "CRM654321",
      },
      date: "2024-11-21",
      hour: "14:30",
    },
    {
      id: "3",
      pet: {
        name: "Charlie",
        breed: "Holland Lop",
        dateOfBirth: "2021-01-10",
        specie: "Rabbit",
        gender: "Male",
        owner: {
          name: "Sophia Brown",
          tel: "+1 555-123-4567",
        },
      },
      veterinary: {
        name: "Dr. Lucas Williams",
        crm: "CRM789012",
      },
      date: "2024-11-22",
      hour: "09:15",
    },
    {
      id: "4",
      pet: {
        name: "Luna",
        breed: "Golden Retriever",
        dateOfBirth: "2022-08-25",
        specie: "Dog",
        gender: "Female",
        owner: {
          name: "Michael Green",
          tel: "+1 321-654-0987",
        },
      },
      veterinary: {
        name: "Dr. Olivia Johnson",
        crm: "CRM345678",
      },
      date: "2024-11-23",
      hour: "11:45",
    },
  ];

  // Functions

  return {
    data: petMock
  }
}
