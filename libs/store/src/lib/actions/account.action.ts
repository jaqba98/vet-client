import { createAction, props } from '@ngrx/store'

import { AccountStoreModel } from '../model/account-store.model'

export const setAccount = createAction('[Account] Set Account', props<AccountStoreModel>())
