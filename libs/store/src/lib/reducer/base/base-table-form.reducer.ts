import { createReducer, on } from '@ngrx/store'

import { BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'
import {
  baseTableFormCreateAction,
  baseTableFormDeleteAction,
  baseTableFormIsSelectedAction,
  baseTableFormTabAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
} from '../../actions/base/base-table-form-action.service'

export const baseTableFormReducer = <TRow>() => {
  const initialState: BaseTableFormStoreModel<TRow> = {
    rows: [],
    page: 0,
    maxPage: 0,
    tab: 'table',
  }
  return createReducer<BaseTableFormStoreModel<TRow>>(
    initialState,
    on(baseTableFormCreateAction<TRow>(), (state: BaseTableFormStoreModel<TRow>, payload) => ({
      ...state, ...payload,
    })),
    on(baseTableFormIsSelectedAction, (state: BaseTableFormStoreModel<TRow>, { ids, isSelected }) => ({
      ...state, rows: state.rows.map(row => ids.includes(row.id) ? { ...row, isSelected } : row),
    })),
    on(baseTableFormDeleteAction, (state: BaseTableFormStoreModel<TRow>, { ids }) => ({
      ...state, rows: state.rows.filter(row => !ids.includes(row.id)),
    })),
    on(baseTableFormTabAction<TRow>(), (state: BaseTableFormStoreModel<TRow>, { tab }) => ({ ...state, tab })),
    on(baseTableFormUpdateRow<TRow>(), (state: BaseTableFormStoreModel<TRow>, { row }) => ({
      ...state,
      rows: state.rows.map(currRow => currRow.id === row.id ? row : currRow),
    })),
    on(baseTableFormUpdateSelectedRow<TRow>(), (state: BaseTableFormStoreModel<TRow>, { row }) => ({
      ...state,
      selectedRow: row,
    })),
  )
}
