import { createReducer, on } from '@ngrx/store'

import { AccountStoreModel } from '../../model/database/account-store.model'
import { accountSetAction } from '../../actions/database/account.action'

const initialAccount: AccountStoreModel = {
  account: {
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    pictureUrl: '',
  },
}

export const accountReducer = createReducer(
  initialAccount,
  on(accountSetAction, (state: AccountStoreModel, { account }) => ({ ...state, ...account })),
)
