import { BaseDomainModel } from '../base/base-domain.model'

export interface PetDomainModel extends BaseDomainModel {
  fullName: string
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
