import { ControlType } from '@vet-client/lib-base-form'

export type TableFormModel<TKey extends string = string> = Record<TKey, ControlType>

export type TableFormHeadersModel = string[]
