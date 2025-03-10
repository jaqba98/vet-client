import { ControlType } from '@vet-client/lib-base-form'

export type TableFormModel<TKey extends string = string> = Record<TKey, ControlType>

export interface TableFormRowModel<TData = object> {
  id: number
  isSelected: boolean
  data: TData
}

export type TableFormRowsModel<TData = object> = TableFormRowModel<TData>[]

export type TableFormHeadersModel = string[]
