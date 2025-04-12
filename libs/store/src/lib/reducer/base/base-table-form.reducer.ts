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

export const baseTableFormReducer = <TData, TMetadata>(name: ActionTypeEnum) => {
  const initialState: BaseTableFormStoreModel<TData, TMetadata> = {
    rows: [],
    page: 0,
    maxPage: 0,
    metadata: <TMetadata>{},
    tab: 'table',
  }
  return createReducer<BaseTableFormStoreModel<TData, TMetadata>>(
    initialState,
    on(baseTableFormRowsAction<TData, TMetadata>(name), (state: BaseTableFormStoreModel<TData, TMetadata>, { rows }) => ({ ...state, rows })),
    on(baseTableFormIsSelectedAction(name), (state: BaseTableFormStoreModel<TData, TMetadata>, { ids, isSelected }) => ({
      ...state, rows: state.rows.map(row => ids.includes(row.id) ? { ...row, isSelected } : row),
    })),
    on(baseTableFormDeleteAction(name), (state: BaseTableFormStoreModel<TData, TMetadata>, { ids }) => ({
      ...state, rows: state.rows.filter(row => !ids.includes(row.id)),
    })),
    on(baseTableFormTabAction<TData, TMetadata>(name), (state: BaseTableFormStoreModel<TData, TMetadata>, { tab }) => ({ ...state, tab })),
    on(baseTableFormUpdateRow<TData>(name), (state: BaseTableFormStoreModel<TData, TMetadata>, { row }) => ({
      ...state,
      rows: state.rows.map(currRow => currRow.id === row.id ? row : currRow),
    })),
    on(baseTableFormUpdateSelectedRow<TData>(name), (state: BaseTableFormStoreModel<TData, TMetadata>, { row }) => ({
      ...state,
      selectedRow: row,
    })),
    on(baseTableFormPageAction(name), (state: BaseTableFormStoreModel<TData, TMetadata>, { page }) => ({ ...state, page })),
    on(baseTableFormMaxPageAction(name), (state: BaseTableFormStoreModel<TData, TMetadata>) => {
      return {
        ...state,
        maxPage: state.rows.length === 0 ? 1 : Math.ceil(state.rows.length / NUMBER_OF_ROWS_PER_PAGE),
      }
    }),
  )
}
