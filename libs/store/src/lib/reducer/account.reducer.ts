import { createReducer, on } from '@ngrx/store'

import { AccountStoreModel } from '../model/account-store.model'
import { accountSetAction } from '../actions/account.action'

const initialAccount: AccountStoreModel = {
  id: -1,
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  role: '',
  pictureUrl: '',
}

export const accountReducer = createReducer(
  initialAccount,
  on(accountSetAction, (state: AccountStoreModel, payload) => ({ ...state, ...payload })),
)
