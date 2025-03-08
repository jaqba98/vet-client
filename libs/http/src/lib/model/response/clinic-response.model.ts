import { ClinicDomainDataModel } from '@vet-client/lib-domain'
import { BaseResponseModel } from '../base/base-response.model'
import { CrudReadModel } from '../base/crud.model'

export interface ClinicCreateResponseModel extends BaseResponseModel, CrudReadModel<ClinicDomainDataModel> {}
