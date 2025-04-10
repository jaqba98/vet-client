import { TokenRequestModel } from '../base/token-request.model'
import { AppointmentMedicationDomainModel } from '../../../domain/relation/appointment-medication-domain.model'

export interface AppointmentMedicationRequestModel extends TokenRequestModel, AppointmentMedicationDomainModel {
}
