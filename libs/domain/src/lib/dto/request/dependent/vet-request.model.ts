import { TokenRequestModel } from '../base/token-request.model'
import { VetDomainModel } from '../../../domain/dependent/vet-domain.model'

export interface VetRequestModel extends TokenRequestModel, VetDomainModel {
}
