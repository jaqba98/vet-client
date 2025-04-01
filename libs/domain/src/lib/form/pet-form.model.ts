import { ControlInputModel } from '@vet-client/lib-base-form'

export interface PetFormModel {
  id: ControlInputModel
  isArchived: ControlInputModel
  name: ControlInputModel
  species: ControlInputModel
  breed: ControlInputModel
  dateOfBirth: ControlInputModel
  weightKg: ControlInputModel
  color: ControlInputModel
  sterilized: ControlInputModel
  pictureUrl: ControlInputModel
  microchipNumber: ControlInputModel
  medicalNotes: ControlInputModel
  clientId: ControlInputModel
}
