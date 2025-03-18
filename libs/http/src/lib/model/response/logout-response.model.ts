import { BaseResponseModel } from '../base/base-response.model'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

export type LogoutResponseModel = BaseResponseModel<Array<ClinicDomainDataModel['data']>>
