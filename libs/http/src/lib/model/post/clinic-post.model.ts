import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { ClinicCreateRequestModel, ClinicReadRequestModel } from '../request/clinic-request.model'

export type ClinicCreatePostModel = BaseEndpointModel<EndpointEnum.clinicCreate, ClinicCreateRequestModel>

export type ClinicReadPostModel = BaseEndpointModel<EndpointEnum.clinicRead, ClinicReadRequestModel>
