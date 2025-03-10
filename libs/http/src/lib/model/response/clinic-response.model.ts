import { BaseResponseModel } from '../base/base-response.model'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export type ClinicCreateResponseModel = BaseResponseModel

export interface ClinicReadResponseModel extends BaseResponseModel {
  clinics: ClinicDomainDataModel[]
}
