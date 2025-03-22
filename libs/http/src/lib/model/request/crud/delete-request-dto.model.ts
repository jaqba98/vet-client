import { DeleteDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface DeleteRequestDtoModel extends TokenRequestDtoModel, DeleteDomainModel {
}
