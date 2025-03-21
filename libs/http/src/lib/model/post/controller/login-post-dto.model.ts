import { EndpointEnum } from '../../../enum/endpoint.enum'
import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { LoginRequestDtoModel } from '../../request/controller/login-request-dto.model'

export type LoginPostDtoModel = BaseEndpointModel<EndpointEnum.login, LoginRequestDtoModel>
