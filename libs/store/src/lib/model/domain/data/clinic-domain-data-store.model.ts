// done
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export interface ClinicDomainDataStoreModel {
  page: number
  // I am here
  maxPage: number
  selectedPage: number
  tab: string
  clinics: ClinicDomainDataModel[]
}
