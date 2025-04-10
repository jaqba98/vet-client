import { AppointmentDomainModel } from '../../../domain/dependent/appointment-domain.model'

export interface AppointmentDataModel {
  appointments: AppointmentDomainModel[]
}
