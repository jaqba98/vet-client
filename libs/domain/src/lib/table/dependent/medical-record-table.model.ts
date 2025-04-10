import { MedicalRecordDomainModel } from '../../domain/dependent/medical-record-domain.model'

export interface MedicalRecordTableModel {
  id: number
  isSelected: boolean
  domain: MedicalRecordDomainModel
}
