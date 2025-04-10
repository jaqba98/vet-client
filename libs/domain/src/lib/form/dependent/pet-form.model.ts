import { ControlType } from '@vet-client/lib-base-form'

export interface PetFormModel {
  id: ControlType
  fullName: ControlType
  species: ControlType
  breed: ControlType
  dateOfBirth: ControlType
  weightKg: ControlType
  color: ControlType
  sterilized: ControlType
  pictureUrl: ControlType
  microchipNumber: ControlType
  medicalNotes: ControlType
  clientId: ControlType
}
