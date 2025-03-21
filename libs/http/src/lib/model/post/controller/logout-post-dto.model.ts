import { EndpointEnum } from '../../../enum/endpoint.enum'
import { BaseEndpointModel } from '../../base/base-endpoint.model'

export type LogoutPostDtoModel = BaseEndpointModel<EndpointEnum.logout, undefined>
