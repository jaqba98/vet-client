import { ClinicDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface ClinicRequestDtoModel extends TokenRequestDtoModel, ClinicDomainModel {
}
