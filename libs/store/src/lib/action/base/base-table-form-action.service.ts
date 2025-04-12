import { createAction, props } from '@ngrx/store'

import { BaseTableFormRowModel, BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'
import { ActionTypeEnum } from '../../enum/action-type.enum'

export const baseTableFormRowsAction = <TData, TMetadata>(name: ActionTypeEnum) => createAction(
  `[${name}] rows action`, props<Pick<BaseTableFormStoreModel<TData, TMetadata>, 'rows'>>(),
)

export const baseTableFormIsSelectedAction = (name: ActionTypeEnum) => createAction(
  `[${name}] is selected action`, props<{ ids: number[], isSelected: boolean }>(),
)

export const baseTableFormDeleteAction = (name: ActionTypeEnum) => createAction(
  `[${name}] delete action`, props<{ ids: number[] }>(),
)

export const baseTableFormTabAction = <TData, TMetadata>(name: ActionTypeEnum) => createAction(
  `[${name}] tab action`, props<Pick<BaseTableFormStoreModel<TData, TMetadata>, 'tab'>>(),
)

export const baseTableFormUpdateRow = <TRow>(name: ActionTypeEnum) => createAction(
  `[${name}] update row action`, props<{ row: BaseTableFormRowModel<TRow> }>(),
)

export const baseTableFormUpdateSelectedRow = <TRow>(name: ActionTypeEnum) => createAction(
  `[${name}] update row selected action`, props<{ row: BaseTableFormRowModel<TRow> }>(),
)

export const baseTableFormPageAction = (name: ActionTypeEnum) => createAction(
  `[${name}] page action`, props<{ page: number }>(),
)

export const baseTableFormMaxPageAction = (name: ActionTypeEnum) => createAction(`[${name}] max page action`)
