export interface PetDatabaseModel {
  id: number
  isArchived: boolean
  name: string
  species: string
  breed: string
  dateOfBirth: string
  weightKg: number
  color: string
  sterilized: boolean
  pictureUrl: string
  microchipNumber: string
  medicalNotes: string
  clientId: number
}
