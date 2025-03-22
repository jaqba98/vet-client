import { ClinicDomainModel } from '@vet-client/lib-domain'

export interface ClinicDomainDataStoreModel {
  clinics: ClinicDomainModel[]
  page: number
  maxPage: number
  tab: string
  selectedClinic: ClinicDomainModel | undefined
}
