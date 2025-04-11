import { createReducer, on } from '@ngrx/store'

import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import { BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'
import { ActionTypeEnum } from '../../enum/action-type.enum'
import {
  baseTableFormDeleteAction,
  baseTableFormIsSelectedAction,
  baseTableFormMaxPageAction,
  baseTableFormPageAction,
  baseTableFormRowsAction,
  baseTableFormTabAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
} from '../../action/base/base-table-form-action.service'

export const baseTableFormReducer = <TRow>(name: ActionTypeEnum) => {
  const initialState: BaseTableFormStoreModel<TRow> = {
    rows: [],
    page: 0,
    maxPage: 0,
    tab: 'table',
  }
  return createReducer<BaseTableFormStoreModel<TRow>>(
    initialState,
    on(baseTableFormRowsAction<TRow>(name), (state: BaseTableFormStoreModel<TRow>, { rows }) => ({ ...state, rows })),
    on(baseTableFormIsSelectedAction(name), (state: BaseTableFormStoreModel<TRow>, { ids, isSelected }) => ({
      ...state, rows: state.rows.map(row => ids.includes(row.id) ? { ...row, isSelected } : row),
    })),
    on(baseTableFormDeleteAction(name), (state: BaseTableFormStoreModel<TRow>, { ids }) => ({
      ...state, rows: state.rows.filter(row => !ids.includes(row.id)),
    })),
    on(baseTableFormTabAction<TRow>(name), (state: BaseTableFormStoreModel<TRow>, { tab }) => ({ ...state, tab })),
    on(baseTableFormUpdateRow<TRow>(name), (state: BaseTableFormStoreModel<TRow>, { row }) => ({
      ...state,
      rows: state.rows.map(currRow => currRow.id === row.id ? row : currRow),
    })),
    on(baseTableFormUpdateSelectedRow<TRow>(name), (state: BaseTableFormStoreModel<TRow>, { row }) => ({
      ...state,
      selectedRow: row,
    })),
    on(baseTableFormPageAction(name), (state: BaseTableFormStoreModel<TRow>, { page }) => ({ ...state, page })),
    on(baseTableFormMaxPageAction(name), (state: BaseTableFormStoreModel<TRow>) => {
      return {
        ...state,
        maxPage: state.rows.length === 0 ? 1 : Math.ceil(state.rows.length / NUMBER_OF_ROWS_PER_PAGE),
      }
    }),
  )
}
