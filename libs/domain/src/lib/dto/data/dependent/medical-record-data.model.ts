import { MedicalRecordDomainModel } from '../../../domain/dependent/medical-record-domain.model'

export interface MedicalRecordDataModel {
  medicalRecords: MedicalRecordDomainModel[]
}
