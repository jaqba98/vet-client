export interface ClinicDatabaseModel {
  id: number
  fullName: string
  street: string
  buildingNumber: string
  apartmentNumber: string
  postalCode: string
  city: string
  province: string
  country: string
  email: string
  phoneNumber: string
  isArchived: boolean
  openingHoursId: number
}
