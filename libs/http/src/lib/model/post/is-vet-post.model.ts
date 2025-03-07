import { EndpointEnum } from '../../enum/endpoint.enum'
import { BaseEndpointModel } from '../base/base-endpoint.model'
import { IsVetRequestModel } from '../request/is-vet-request.model'

export type IsVetPostModel = BaseEndpointModel<EndpointEnum.isVet, IsVetRequestModel>
