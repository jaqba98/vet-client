// done
import { ControlType } from '@vet-client/lib-base-form'

export interface TableNavFormModel {
  table: ControlType
  create: ControlType
  delete: ControlType
  refresh: ControlType
  search: ControlType
}

export interface TableNavDataModel {
  table: boolean
  create: boolean
  delete: boolean
  refresh: boolean
  search: boolean
}
