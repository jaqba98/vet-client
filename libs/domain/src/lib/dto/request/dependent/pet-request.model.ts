import { TokenRequestModel } from '../base/token-request.model'
import { PetDomainModel } from '../../../domain/dependent/pet-domain.model'

export interface PetRequestModel extends TokenRequestModel, PetDomainModel {
}
