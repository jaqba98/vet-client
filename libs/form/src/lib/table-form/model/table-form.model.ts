import { ControlType } from '@vet-client/lib-base-form'

export type TableFormModel<TKey extends string = string> = Record<TKey, ControlType>

export type TableDataModel<TKey extends string = string> = Record<TKey, string>

export type TableFormRowModel<TKey extends string = string> = TableDataModel<TKey>

export type TableFormRowsModel<TKey extends string = string> = TableFormRowModel<TKey>[]
