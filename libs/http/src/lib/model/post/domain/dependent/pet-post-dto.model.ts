import { DeleteRequestModel, PetRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreatePetPostDtoModel = BaseEndpointModel<EndpointEnum.petCreate, PetRequestModel>

export type ReadPetPostDtoModel = BaseEndpointModel<EndpointEnum.petRead, TokenRequestModel>

export type UpdatePetPostDtoModel = BaseEndpointModel<EndpointEnum.petUpdate, PetRequestModel>

export type DeletePetPostDtoModel = BaseEndpointModel<EndpointEnum.petDelete, DeleteRequestModel>
