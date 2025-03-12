// done
import { createReducer, on } from '@ngrx/store'

import { LogoutDomainResponseStoreModel } from '../../../model/domain/response/logout-domain-response-store.model'
import { setLogoutDomainResponse } from '../../../actions/domain/response/logout-domain-response.action'

const initialState: LogoutDomainResponseStoreModel = { success: false }

export const logoutDomainResponseReducer = createReducer<LogoutDomainResponseStoreModel>(
  initialState,
  on(setLogoutDomainResponse, (state: LogoutDomainResponseStoreModel, { success }) => ({ ...state, success })),
)
