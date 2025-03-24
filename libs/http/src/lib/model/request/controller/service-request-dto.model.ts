import { ServiceDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface ServiceRequestDtoModel extends TokenRequestDtoModel, ServiceDomainModel {
}
