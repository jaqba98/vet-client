import { DeleteRequestModel, ServiceClinicRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateServiceClinicPostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicCreate, ServiceClinicRequestModel>

export type ReadServiceClinicPostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicRead, TokenRequestModel>

export type UpdateServiceClinicPostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicUpdate, ServiceClinicRequestModel>

export type DeleteServiceClinicPostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicDelete, DeleteRequestModel>
