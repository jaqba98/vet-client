import { MedicalRecordDomainModel } from '../domain/medical-record-domain.model'

export interface MedicalRecordTableModel {
  id: number
  isSelected: boolean
  domain: MedicalRecordDomainModel
}
