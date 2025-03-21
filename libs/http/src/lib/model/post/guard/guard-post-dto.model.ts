import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { GuardRequestDtoModel } from '../../request/guard/guard-request-dto.model'

export type GetAccountPostDtoModel = BaseEndpointModel<EndpointEnum.getAccount, GuardRequestDtoModel>

export type HasRolePostDtoModel = BaseEndpointModel<EndpointEnum.hasRole, GuardRequestDtoModel>

export type IsClientPostDtoModel = BaseEndpointModel<EndpointEnum.isClient, GuardRequestDtoModel>

export type IsVetPostDtoModel = BaseEndpointModel<EndpointEnum.isVet, GuardRequestDtoModel>

export type ValidTokenPostDtoModel = BaseEndpointModel<EndpointEnum.validToken, GuardRequestDtoModel>
