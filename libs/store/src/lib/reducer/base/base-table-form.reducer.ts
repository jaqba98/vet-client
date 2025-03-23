import { createReducer, on } from '@ngrx/store'

import { BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'
import { baseTableFormCreateAction, baseTableFormReadAction } from '../../actions/base/base-table-form-action.service'

export const baseTableFormReducer = <TRow>(name: string) => {
  const initialState: BaseTableFormStoreModel<TRow> = { rows: [], page: 0, maxPage: 0 }
  return createReducer<BaseTableFormStoreModel<TRow>>(
    initialState,
    on(baseTableFormCreateAction<TRow>(name), (state: BaseTableFormStoreModel<TRow>, payload) => ({
      ...state, ...payload,
    })),
    on(baseTableFormReadAction<TRow>(name), (state: BaseTableFormStoreModel<TRow>, payload) => ({
      ...state, ...payload,
    })),
  )
}
