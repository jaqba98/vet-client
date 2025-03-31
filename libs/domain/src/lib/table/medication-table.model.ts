import { MedicationDomainModel } from '../domain/medication-domain.model'

export interface MedicationTableModel {
  id: number
  isSelected: boolean
  domain: MedicationDomainModel
}
