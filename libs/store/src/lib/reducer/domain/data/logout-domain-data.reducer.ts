// done
import { createReducer, on } from '@ngrx/store'

import { LogoutDomainDataStoreModel } from '../../../model/domain/data/logout-domain-data-store.model'
import { setLogoutDomainData } from '../../../actions/domain/data/logout-domain-data.action'

const initialState: LogoutDomainDataStoreModel = { logout: false }

export const logoutDomainDataReducer = createReducer<LogoutDomainDataStoreModel>(
  initialState,
  on(setLogoutDomainData, (state: LogoutDomainDataStoreModel, { logout }) => ({ ...state, logout })),
)
