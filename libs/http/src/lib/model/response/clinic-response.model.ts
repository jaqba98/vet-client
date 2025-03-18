import { BaseResponseModel } from '../base/base-response.model'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export type ClinicCreateResponseModel = BaseResponseModel<Array<ClinicDomainDataModel['data']>>

export type ClinicReadResponseModel = BaseResponseModel<Array<ClinicDomainDataModel['data']>>

export type ClinicUpdateResponseModel = BaseResponseModel<Array<ClinicDomainDataModel['data']>>

export type ClinicDeleteResponseModel = BaseResponseModel<Array<ClinicDomainDataModel['data']>>
