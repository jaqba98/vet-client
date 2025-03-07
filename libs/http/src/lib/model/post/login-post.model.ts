import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { LoginRequestModel } from '../request/login-request.model'

export type LoginPostModel = BaseEndpointModel<EndpointEnum.login, LoginRequestModel>
