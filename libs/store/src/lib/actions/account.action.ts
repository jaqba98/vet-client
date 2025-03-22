import { createAction, props } from '@ngrx/store'

import { AccountStoreModel } from '../model/account-store.model'

export const accountSetAction = createAction('[Account] Set Account', props<AccountStoreModel>())
