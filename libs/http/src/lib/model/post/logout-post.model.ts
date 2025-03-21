import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { LogoutRequestDtoModel } from '../request/controller/logout-request-dto.model'

export type LogoutPostModel = BaseEndpointModel<EndpointEnum.logout, LogoutRequestDtoModel>
