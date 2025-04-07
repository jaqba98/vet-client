export interface MedicationDatabaseModel {
  id: number
  isArchived: boolean
  fullName: string
  description: string
  manufacturer: string
  dose: string
  quantityInStock: number
  expirationDate: string
  price: number
  isAvailable: boolean
  clinicId: number
}
