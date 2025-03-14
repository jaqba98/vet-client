// done
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export interface ClinicDomainDataStoreModel {
  clinics: ClinicDomainDataModel[]
  page: number
  // I am here
  maxPage: number
  selectedPage: number
  tab: string
}
