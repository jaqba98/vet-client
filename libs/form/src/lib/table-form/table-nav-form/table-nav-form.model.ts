import { ControlType } from '@vet-client/lib-base-form'

export interface BaseTableNavFormModel<T> {
  table: T
  create: T
  delete: T
}

export type TableNavFormModel = BaseTableNavFormModel<ControlType>

export type TableNavDataModel = BaseTableNavFormModel<boolean>
