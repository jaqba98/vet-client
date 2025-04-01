import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { ClientRequestDtoModel } from '../../request/controller/client-request-dto.model'

export type CreateClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientCreate, ClientRequestDtoModel>

export type ReadClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientRead, TokenRequestDtoModel>

export type UpdateClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientUpdate, ClientRequestDtoModel>

export type DeleteClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientDelete, DeleteRequestDtoModel>
