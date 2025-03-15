import { ClinicDomainDataInternalModel } from '@vet-client/lib-domain'
import { BaseRequestModel } from '../base/base-request.model'

export interface ClinicCreateRequestModel extends BaseRequestModel, ClinicDomainDataInternalModel {}

export type ClinicReadRequestModel = BaseRequestModel

export interface ClinicUpdateRequestModel extends BaseRequestModel, ClinicDomainDataInternalModel {
  id: number
}

export interface ClinicDeleteRequestModel extends BaseRequestModel {
  ids: number[]
}
