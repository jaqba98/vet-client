import { createReducer, on } from '@ngrx/store'

import { GetAccountDataModel } from '@vet-client/lib-domain'
import { accountSetAction } from '../../action/domain/account.action'

const initialAccount: GetAccountDataModel = {
  email: '',
  firstName: '',
  lastName: '',
  pictureUrl: '',
  role: '',
}

export const accountReducer = createReducer(
  initialAccount,
  on(accountSetAction, (state: GetAccountDataModel, payload) => ({ ...state, ...payload })),
)
