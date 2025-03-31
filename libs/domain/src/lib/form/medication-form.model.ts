import { ControlInputModel } from '@vet-client/lib-base-form'

export interface MedicationFormModel {
  id: ControlInputModel
  isArchived: ControlInputModel
  name: ControlInputModel
  description: ControlInputModel
  manufacturer: ControlInputModel
  dose: ControlInputModel
  quantityInStock: ControlInputModel
  expirationDate: ControlInputModel
  price: ControlInputModel
  isAvailable: ControlInputModel
  clinicId: ControlInputModel
}
