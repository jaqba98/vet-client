import { GetAccountDomainModel, HasRoleDomainModel, ValidTokenDomainModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'

export type GetAccountPostDtoModel = BaseEndpointModel<EndpointEnum.getAccount, GetAccountDomainModel>

export type HasRolePostDtoModel = BaseEndpointModel<EndpointEnum.hasRole, HasRoleDomainModel>

export type ValidTokenPostDtoModel = BaseEndpointModel<EndpointEnum.validToken, ValidTokenDomainModel>
