import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import {
  ClinicCreateRequestModel,
  ClinicDeleteRequestModel,
  ClinicReadRequestModel, ClinicUpdateRequestModel,
} from '../request/clinic-request.model'

export type ClinicCreatePostModel = BaseEndpointModel<EndpointEnum.clinicCreate, ClinicCreateRequestModel>

export type ClinicReadPostModel = BaseEndpointModel<EndpointEnum.clinicRead, ClinicReadRequestModel>

export type ClinicUpdatePostModel = BaseEndpointModel<EndpointEnum.clinicUpdate, ClinicUpdateRequestModel>

export type ClinicDeletePostModel = BaseEndpointModel<EndpointEnum.clinicDelete, ClinicDeleteRequestModel>
