// done
import { createReducer, on } from '@ngrx/store'

import { LoginDomainResponseStoreModel } from '../../../model/domain/response/login-domain-response-store.model'
import { setLoginDomainResponse } from '../../../actions/domain/response/login-domain-response.action'

export const initialState: LoginDomainResponseStoreModel = { isError: false }

export const loginDomainResponseReducer = createReducer<LoginDomainResponseStoreModel>(
  initialState,
  on(setLoginDomainResponse, (state: LoginDomainResponseStoreModel, { isError }) => ({ ...state, isError })),
)
