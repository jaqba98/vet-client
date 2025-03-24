import { createAction, props } from '@ngrx/store'
import { BaseTableFormRowModel, BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'

export const baseTableFormRowsAction = <TRow>() => createAction(
  '[Base Table Form] Rows Action', props<Pick<BaseTableFormStoreModel<TRow>, 'rows'>>(),
)

export const baseTableFormIsSelectedAction = createAction(
  '[Base Table Form] Is Selected Action', props<{ ids: number[], isSelected: boolean }>(),
)

export const baseTableFormDeleteAction = createAction(
  '[Base Table Form] Delete Action', props<{ ids: number[] }>(),
)

export const baseTableFormTabAction = <TRow>() => createAction(
  '[Base Table Form] Tab Action', props<Pick<BaseTableFormStoreModel<TRow>, 'tab'>>(),
)

export const baseTableFormUpdateRow = <TRow>() => createAction(
  '[Base Table Form] Update Row Action', props<{ row: BaseTableFormRowModel<TRow> }>(),
)

export const baseTableFormUpdateSelectedRow = <TRow>() => createAction(
  '[Base Table Form] Update Row Selected Action', props<{ row: BaseTableFormRowModel<TRow> }>(),
)

export const baseTableFormPageAction = createAction(
  '[Base Table Form] Page Action', props<{ page: number }>(),
)

export const baseTableFormMaxPageAction = createAction('[Base Table Form] Max Page Action')
