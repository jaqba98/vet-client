import { VetDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface VetRequestDtoModel extends TokenRequestDtoModel, VetDomainModel {
}
