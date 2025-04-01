import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { PetRequestDtoModel } from '../../request/controller/pet-request-dto.model'

export type CreatePetPostDtoModel = BaseEndpointModel<EndpointEnum.petCreate, PetRequestDtoModel>

export type ReadPetPostDtoModel = BaseEndpointModel<EndpointEnum.petRead, TokenRequestDtoModel>

export type UpdatePetPostDtoModel = BaseEndpointModel<EndpointEnum.petUpdate, PetRequestDtoModel>

export type DeletePetPostDtoModel = BaseEndpointModel<EndpointEnum.petDelete, DeleteRequestDtoModel>
