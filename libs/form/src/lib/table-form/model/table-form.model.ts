import { ControlType } from '@vet-client/lib-base-form'

export type TableFormModel<TKey> = Record<keyof TKey, ControlType>
