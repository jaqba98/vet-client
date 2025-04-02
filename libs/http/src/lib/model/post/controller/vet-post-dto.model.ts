import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { VetRequestDtoModel } from '../../request/controller/vet-request-dto.model'

export type ReadVetPostDtoModel = BaseEndpointModel<EndpointEnum.vetRead, TokenRequestDtoModel>

export type UpdateVetPostDtoModel = BaseEndpointModel<EndpointEnum.vetUpdate, VetRequestDtoModel>
