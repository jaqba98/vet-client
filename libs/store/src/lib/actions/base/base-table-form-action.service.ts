import { createAction, props } from '@ngrx/store'
import { BaseTableFormStoreModel } from '../../model/base/base-table-form-store.model'

export const baseTableFormCreateAction = <TRow>() => createAction(
  '[Base Table Form] Create Action', props<BaseTableFormStoreModel<TRow>>(),
)
