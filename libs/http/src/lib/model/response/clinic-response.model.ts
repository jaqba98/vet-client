import { BaseResponseModel } from '../base/base-response.model'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export type ClinicCreateResponseModel = BaseResponseModel

export interface ClinicReadResponseModel extends BaseResponseModel {
  clinics: ClinicDomainDataModel['data'][]
}

export type ClinicUpdateResponseModel = BaseResponseModel

export type ClinicDeleteResponseModel = BaseResponseModel
