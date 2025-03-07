import { ControlType } from '@vet-client/lib-base-form'

import { TableFormModel, TableModel } from '../table-form/model/table-form.model'

export interface VetServicesFormModel extends TableFormModel {
  id: ControlType
  name: ControlType
  description: ControlType
  category: ControlType
  durationMinutes: ControlType
  price: ControlType
  isAvailable: ControlType
}

export interface VetServicesModel extends TableModel {
  id: string
  name: string
  description: string
  category: string
  durationMinutes: string
  price: string
  isAvailable: string
}
