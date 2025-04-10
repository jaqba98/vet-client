import { TokenRequestModel } from '../base/token-request.model'
import { ClinicDomainModel } from '../../../domain/independent/clinic-domain.model'

export interface ClinicRequestModel extends TokenRequestModel, ClinicDomainModel {
}
