import { ControlType } from '@vet-client/lib-base-form'

export interface MedicationFormModel {
  id: ControlType
  fullName: ControlType
  description: ControlType
  manufacturer: ControlType
  dose: ControlType
  quantityInStock: ControlType
  expirationDate: ControlType
  price: ControlType
  isAvailable: ControlType
  clinicId: ControlType
}
