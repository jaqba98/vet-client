import { TokenRequestModel } from '../base/token-request.model'
import { AppointmentServiceClinicDomainModel } from '../../../domain/relation/appointment-service-clinic-domain.model'

export interface AppointmentServiceClinicRequestModel extends TokenRequestModel, AppointmentServiceClinicDomainModel {
}
