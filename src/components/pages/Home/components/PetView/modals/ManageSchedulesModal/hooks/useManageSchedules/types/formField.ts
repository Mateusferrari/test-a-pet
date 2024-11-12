import { Option } from "@components/structure/SelectGeneric/types";

export interface FormFields {
  name: string,
  date: string,
  hour: string,
  specie: Option,
  breed: string,
  owner: string,
  tel: string,
  vet: Option,
  birth: string
}
