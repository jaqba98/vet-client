import { BaseDomainModel } from '../base/base-domain.model'

export interface AppointmentServiceClinicDomainModel extends BaseDomainModel {
  appointmentId: number
  serviceClinicId: number
}
