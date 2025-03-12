// done
import { createReducer, on } from '@ngrx/store'

import { LoginDomainDataModel } from '@vet-client/lib-domain'
import { setLoginDomainData } from '../../../actions/domain/data/login-domain-data.action'

export const initialState: LoginDomainDataModel = {
  email: '',
  password: '',
}

export const loginDomainDataReducer = createReducer<LoginDomainDataModel>(
  initialState,
  on(setLoginDomainData, (state: LoginDomainDataModel, { email, password }) => ({ ...state, email, password })),
)
