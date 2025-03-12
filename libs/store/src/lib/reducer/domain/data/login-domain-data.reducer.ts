// done
import { createReducer, on } from '@ngrx/store'

import { LoginDomainDataStoreModel } from '../../../model/domain/data/login-domain-data-store.model'
import { setLoginDomainData } from '../../../actions/domain/data/login-domain-data.action'

const initialState: LoginDomainDataStoreModel = { email: '', password: '' }

export const loginDomainDataReducer = createReducer<LoginDomainDataStoreModel>(
  initialState,
  on(setLoginDomainData, (state: LoginDomainDataStoreModel, { email, password }) => ({ ...state, email, password })),
)
