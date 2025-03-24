import { createAction, props } from '@ngrx/store'

import { BaseTableFormRowModel, BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'
import { ActionTypeEnum } from '../../enum/action-type.enum'

export const baseTableFormRowsAction = <TRow>(name: ActionTypeEnum) => createAction(
  `[${name}] Rows Action`, props<Pick<BaseTableFormStoreModel<TRow>, 'rows'>>(),
)

export const baseTableFormIsSelectedAction = (name: ActionTypeEnum) => createAction(
  `[${name}] Is Selected Action`, props<{ ids: number[], isSelected: boolean }>(),
)

export const baseTableFormDeleteAction = (name: ActionTypeEnum) => createAction(
  `[${name}] Delete Action`, props<{ ids: number[] }>(),
)

export const baseTableFormTabAction = <TRow>(name: ActionTypeEnum) => createAction(
  `[${name}] Tab Action`, props<Pick<BaseTableFormStoreModel<TRow>, 'tab'>>(),
)

export const baseTableFormUpdateRow = <TRow>(name: ActionTypeEnum) => createAction(
  `[${name}] Update Row Action`, props<{ row: BaseTableFormRowModel<TRow> }>(),
)

export const baseTableFormUpdateSelectedRow = <TRow>(name: ActionTypeEnum) => createAction(
  `[${name}] Update Row Selected Action`, props<{ row: BaseTableFormRowModel<TRow> }>(),
)

export const baseTableFormPageAction = (name: ActionTypeEnum) => createAction(
  `[${name}] Page Action`, props<{ page: number }>(),
)

export const baseTableFormMaxPageAction = (name: ActionTypeEnum) => createAction(`[${name}] Max Page Action`)
