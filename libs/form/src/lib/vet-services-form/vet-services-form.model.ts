import { ControlType } from '@vet-client/lib-base-form'

export interface VetServicesFormModel {
  id: ControlType
  name: ControlType
  description: ControlType
  category: ControlType
  durationMinutes: ControlType
  price: ControlType
  isAvailable: ControlType
}

export interface VetServicesModel {
  id: string
  name: string
  description: string
  category: string
  durationMinutes: string
  price: string
  isAvailable: string
}
