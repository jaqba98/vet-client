import { createAction, props } from '@ngrx/store'
import { ActionTypeEnum } from '../../enum/action-type.enum'
import { BaseFormStoreModel } from '../../model/base/base-form-store.model'

export const baseFormAction = <TForm>(name: ActionTypeEnum) => createAction(
  `[${name}] Form Action`, props<Pick<BaseFormStoreModel<TForm>, 'form'>>(),
)
