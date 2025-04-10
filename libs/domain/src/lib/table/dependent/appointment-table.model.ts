import { AppointmentDomainModel } from '../../domain/dependent/appointment-domain.model'

export interface AppointmentTableModel {
  id: number
  isSelected: boolean
  domain: AppointmentDomainModel
}
