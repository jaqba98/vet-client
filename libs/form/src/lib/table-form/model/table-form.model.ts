import { ControlType } from '@vet-client/lib-base-form'

export type TableFormModel<TKey extends string = string> = Record<TKey, ControlType>

export type TableDataModel<TKey extends string = string> = Record<TKey, string>

export interface TableFormRowModel<TKey extends string = string> {
  id: string
  isSelected: boolean
  data: TableDataModel<TKey>
}

export type TableFormRowsModel<TKey extends string = string> = TableFormRowModel<TKey>[]

export type TableFormHeadersModel = string[]
