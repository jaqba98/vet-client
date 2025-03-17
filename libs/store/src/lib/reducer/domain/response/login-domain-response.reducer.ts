import { createReducer, on } from '@ngrx/store'

import { LoginDomainResponseStoreModel } from '../../../model/domain/response/login-domain-response-store.model'
import { loginDomainResponseAction } from '../../../actions/domain/response/login-domain-response.action'

const initialState: LoginDomainResponseStoreModel = { success: false, message: '' }

export const loginDomainResponseReducer = createReducer<LoginDomainResponseStoreModel>(
  initialState,
  on(loginDomainResponseAction, (state: LoginDomainResponseStoreModel, { success, message }) => ({
    ...state, success, message,
  })),
)
