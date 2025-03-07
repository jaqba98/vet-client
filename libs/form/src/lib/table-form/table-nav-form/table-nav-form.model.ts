import { ControlType } from '@vet-client/lib-base-form'

export interface TableNavFormModel {
  table: ControlType
  add: ControlType
  remove: ControlType
  refresh: ControlType
  search: ControlType
}

export interface TableNavModel {
  table: boolean
  add: boolean
  remove: boolean
  refresh: boolean
  search: boolean
}
