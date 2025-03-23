import { createAction, props } from '@ngrx/store'
import { BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'

export const baseTableFormCreateAction = <TRow>(name: string) => createAction(
  `[${name}] Create Action`, props<BaseTableFormStoreModel<TRow>>(),
)

export const baseTableFormReadAction = <TRow>(name: string) => createAction(
  `[${name}] Read Action`, props<Pick<BaseTableFormStoreModel<TRow>, 'rows'>>(),
)
