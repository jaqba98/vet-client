import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { ClinicCreateRequestModel } from '../request/clinic-request.model'

export type ClinicCreatePostModel = BaseEndpointModel<EndpointEnum.clinic, ClinicCreateRequestModel>
