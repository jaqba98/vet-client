// done
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export interface ClinicDomainDataStoreModel {
  page: number
  maxPage: number
  clinics: ClinicDomainDataModel[]
}
