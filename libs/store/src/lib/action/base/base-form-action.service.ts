import { createAction, props } from '@ngrx/store'

import { ActionTypeEnum } from '../../enum/action-type.enum'
import { BaseFormStoreModel } from '../../model/base/base-form-store.model'

export const baseFormAction = <TData, TMetadata>(name: ActionTypeEnum) => createAction(
  `[${name}] form action`, props<Pick<BaseFormStoreModel<TData, TMetadata>, 'data' | 'metadata'>>(),
)
