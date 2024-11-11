export interface Pet {
  name: string
  dateOfBirth: string
  specie: string
  breed: string
  gender: string
  owner: Owner
}

interface Owner {
  name: string
  tel: string
}
