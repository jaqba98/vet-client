import { createReducer, on } from '@ngrx/store'

import { ActionTypeEnum } from '../../enum/action-type.enum'
import { BaseFormStoreModel } from '../../model/base/base-form-store.model'
import { baseFormAction } from '../../actions/base/base-form-action.service'

export const baseFormReducer = <TRow>(name: ActionTypeEnum) => {
  const initialState: BaseFormStoreModel<TRow> = {
    form: <TRow>{},
  }
  return createReducer<BaseFormStoreModel<TRow>>(
    initialState,
    on(baseFormAction<TRow>(name), (state: BaseFormStoreModel<TRow>, { form }) => ({
      ...state, form,
    })),
  )
}
