import { createReducer, on } from '@ngrx/store'

import { BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'
import { baseTableFormCreateAction } from '../../actions/base/base-table-form-action.service'

export const baseTableFormReducer = <TRow>() => {
  const initialState: BaseTableFormStoreModel<TRow> = { rows: [], page: 0, maxPage: 0 }
  return createReducer<BaseTableFormStoreModel<TRow>>(
    initialState,
    on(baseTableFormCreateAction<TRow>(), (state: BaseTableFormStoreModel<TRow>, payload) => ({
      ...state, ...payload,
    })),
  )
}
