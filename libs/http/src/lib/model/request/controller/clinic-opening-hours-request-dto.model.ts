import { OpeningHoursDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface ClinicOpeningHoursRequestDtoModel extends TokenRequestDtoModel, OpeningHoursDomainModel {
}
