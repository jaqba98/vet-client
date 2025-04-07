import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { ServiceRequestDtoModel } from '../../request/controller/service-request-dto.model'

export type CreateServicePostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicCreate, ServiceRequestDtoModel>

export type ReadServicePostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicRead, TokenRequestDtoModel>

export type UpdateServicePostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicUpdate, ServiceRequestDtoModel>

export type DeleteServicePostDtoModel = BaseEndpointModel<EndpointEnum.serviceClinicDelete, DeleteRequestDtoModel>
