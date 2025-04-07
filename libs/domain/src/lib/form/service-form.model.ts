import { ControlInputModel } from '@vet-client/lib-base-form'

export interface ServiceFormModel {
  id: ControlInputModel
  isArchived: ControlInputModel
  fullName: ControlInputModel
  description: ControlInputModel
  category: ControlInputModel
  durationMinutes: ControlInputModel
  price: ControlInputModel
  isAvailable: ControlInputModel
  clinicId: ControlInputModel
}
