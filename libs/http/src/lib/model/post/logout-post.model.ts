import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { LogoutRequestModel } from '../request/logout-request.model'

export type LogoutPostModel = BaseEndpointModel<EndpointEnum.logout, LogoutRequestModel>
