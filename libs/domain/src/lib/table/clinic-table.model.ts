import { ClinicDomainModel } from '../domain/clinic-domain.model'

export interface ClinicTableModel {
  id: number
  isSelected: boolean
  domain: ClinicDomainModel
}
