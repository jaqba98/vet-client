import { TokenRequestModel } from '../base/token-request.model'
import { ServiceClinicDomainModel } from '../../../domain/dependent/service-clinic-domain.model'

export interface ServiceClinicRequestModel extends TokenRequestModel, ServiceClinicDomainModel {
}
