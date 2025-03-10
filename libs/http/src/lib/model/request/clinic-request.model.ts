import { ClinicDomainDataModel } from '@vet-client/lib-domain'
import { BaseRequestModel } from '../base/base-request.model'

export interface ClinicCreateRequestModel extends BaseRequestModel, ClinicDomainDataModel {}

export type ClinicReadRequestModel = BaseRequestModel
