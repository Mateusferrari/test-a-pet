export interface Pet {
  name: string
  dateOfBirth: string
  specie: string
  gender: string
  owner: Owner
}

interface Owner {
  name: string
  tel: string
}
