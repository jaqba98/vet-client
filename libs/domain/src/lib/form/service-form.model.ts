import { ControlInputModel } from '@vet-client/lib-base-form'

export interface ServiceFormModel {
  id: ControlInputModel
  name: ControlInputModel
  description: ControlInputModel
  category: ControlInputModel
  durationMinutes: ControlInputModel
  price: ControlInputModel
  isAvailable: ControlInputModel
}
