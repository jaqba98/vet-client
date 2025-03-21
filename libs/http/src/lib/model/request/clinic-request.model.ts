import { ClinicDomainDataInternalModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../base/token-request-dto.model'

export interface ClinicCreateRequestModel extends TokenRequestDtoModel, ClinicDomainDataInternalModel {}

export type ClinicReadRequestModel = TokenRequestDtoModel

export interface ClinicUpdateRequestModel extends TokenRequestDtoModel, ClinicDomainDataInternalModel {
  id: number
}

export interface ClinicDeleteRequestModel extends TokenRequestDtoModel {
  ids: number[]
}
