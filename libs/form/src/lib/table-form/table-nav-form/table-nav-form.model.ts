import { ControlType } from '@vet-client/lib-base-form'

export interface BaseTableNavFormModel<T> {
  table: T
  add: T
  remove: T
  refresh: T
  search: T
}

export type TableNavFormModel = BaseTableNavFormModel<ControlType>

export type TableNavDataModel = BaseTableNavFormModel<boolean>
