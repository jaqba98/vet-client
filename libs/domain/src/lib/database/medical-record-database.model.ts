export interface MedicalRecordDatabaseModel {
  id: number
  isArchived: boolean
  diagnosis: string
  treatment: string
  procedures: string
  nextAppointment: string
  status: string
  notes: string
}
