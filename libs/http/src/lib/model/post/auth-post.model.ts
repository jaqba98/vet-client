import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { AuthRequestModel } from '../request/auth-request.model'

export type AuthPostModel = BaseEndpointModel<EndpointEnum.validToken, AuthRequestModel>
