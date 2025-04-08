export interface AppointmentDatabaseModel {
  id: number
  fullName: string
  isArchived: boolean
  dateAndHour: string
  type: string
  status: string
  reason: string
  notes: number
  clinicId: number
  vetId: number
  petId: boolean
  invoiceId: number
  medicalRecordId: number
}
