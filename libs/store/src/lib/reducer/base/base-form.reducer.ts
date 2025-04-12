import { createReducer, on } from '@ngrx/store'

import { ActionTypeEnum } from '../../enum/action-type.enum'
import { BaseFormStoreModel } from '../../model/base/base-form-store.model'
import { baseFormAction } from '../../action/base/base-form-action.service'

export const baseFormReducer = <TData, TMetadata>(name: ActionTypeEnum) => {
  const initialState: BaseFormStoreModel<TData, TMetadata> = {
    data: <TData>{},
    metadata: <TMetadata>{},
  }
  return createReducer<BaseFormStoreModel<TData, TMetadata>>(
    initialState,
    on(baseFormAction<TData, TMetadata>(name), (state: BaseFormStoreModel<TData, TMetadata>, { data, metadata }) => ({
      ...state, data, metadata,
    })),
  )
}
