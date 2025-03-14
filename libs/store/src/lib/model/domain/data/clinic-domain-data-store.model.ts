// done
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export interface ClinicDomainDataStoreModel {
  clinics: ClinicDomainDataModel[]
  page: number
  maxPage: number
  tab: string
  selectedClinic: ClinicDomainDataModel | undefined
}
