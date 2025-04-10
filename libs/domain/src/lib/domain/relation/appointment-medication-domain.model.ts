import { BaseDomainModel } from '../base/base-domain.model'

export interface AppointmentMedicationDomainModel extends BaseDomainModel {
  appointmentId: number
  medicationId: number
}
