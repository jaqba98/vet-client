import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import {
  ClinicCreateRequestModel,
  ClinicDeleteRequestModel,
  ClinicReadRequestModel, ClinicUpdateRequestModel,
} from '../request/clinic-request.model'

export type ClinicCreatePostModel = BaseEndpointModel<EndpointEnum.vetClinicCreate, ClinicCreateRequestModel>

export type ClinicReadPostModel = BaseEndpointModel<EndpointEnum.vetClinicRead, ClinicReadRequestModel>

export type ClinicUpdatePostModel = BaseEndpointModel<EndpointEnum.vetClinicUpdate, ClinicUpdateRequestModel>

export type ClinicDeletePostModel = BaseEndpointModel<EndpointEnum.vetClinicDelete, ClinicDeleteRequestModel>
