import { MedicationDomainModel } from '../../domain/dependent/medication-domain.model'

export interface MedicationTableModel {
  id: number
  isSelected: boolean
  domain: MedicationDomainModel
}
