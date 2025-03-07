import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { IsClientRequestModel } from '../request/is-client-request.model'

export type IsClientPostModel = BaseEndpointModel<EndpointEnum.isClient, IsClientRequestModel>
