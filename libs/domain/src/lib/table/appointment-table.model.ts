import { AppointmentDomainModel } from '../domain/appointment-domain.model'

export interface AppointmentTableModel {
  id: number
  isSelected: boolean
  domain: AppointmentDomainModel
}
