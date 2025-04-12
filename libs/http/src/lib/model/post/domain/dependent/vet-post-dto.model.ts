import { TokenRequestModel, VetRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type ReadVetPostDtoModel = BaseEndpointModel<EndpointEnum.vetRead, TokenRequestModel>

export type UpdateVetPostDtoModel = BaseEndpointModel<EndpointEnum.vetUpdate, VetRequestModel>
