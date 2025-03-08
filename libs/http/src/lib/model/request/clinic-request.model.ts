import { ClinicDomainDataModel } from '@vet-client/lib-domain'
import { BaseRequestModel } from '../base/base-request.model'
import { CrudCreateModel } from '../base/crud.model'

export interface ClinicCreateRequestModel extends BaseRequestModel, CrudCreateModel<ClinicDomainDataModel> {}
