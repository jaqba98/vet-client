import { ClientRequestModel, DeleteRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientCreate, ClientRequestModel>

export type ReadClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientRead, TokenRequestModel>

export type UpdateClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientUpdate, ClientRequestModel>

export type DeleteClientPostDtoModel = BaseEndpointModel<EndpointEnum.clientDelete, DeleteRequestModel>
