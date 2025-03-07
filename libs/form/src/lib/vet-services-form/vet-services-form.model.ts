import { ControlType } from '@vet-client/lib-base-form'

export interface BaseVetServicesFormModel<T> {
  id: T
  name: T
  description: T
  category: T
  durationMinutes: T
  price: T
  isAvailable: T
}

export type VetServicesFormModel = BaseVetServicesFormModel<ControlType>

export type VetServicesDataModel = BaseVetServicesFormModel<string>
