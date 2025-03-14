// done
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export interface ClinicDomainDataStoreModel {
  clinics: ClinicDomainDataModel[]
  // I am here
  page: number
  maxPage: number
  selectedPage: number
  tab: string
}
