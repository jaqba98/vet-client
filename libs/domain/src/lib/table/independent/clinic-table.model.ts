import { ClinicDomainModel } from '../../domain/independent/clinic-domain.model'

export interface ClinicTableModel {
  id: number
  isSelected: boolean
  domain: ClinicDomainModel
}
