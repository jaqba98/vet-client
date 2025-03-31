import { MedicationDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface MedicationRequestDtoModel extends TokenRequestDtoModel, MedicationDomainModel {
}
