import { AppointmentDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface AppointmentRequestDtoModel extends TokenRequestDtoModel, AppointmentDomainModel {
}
