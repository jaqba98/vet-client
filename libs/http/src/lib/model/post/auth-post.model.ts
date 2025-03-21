import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { GuardRequestDtoModel } from '../request/guard/guard-request-dto.model'

export type AuthPostModel = BaseEndpointModel<EndpointEnum.validToken, GuardRequestDtoModel>
