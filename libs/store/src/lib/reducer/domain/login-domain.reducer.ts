// done
import { createReducer, on } from '@ngrx/store'

import { LoginDomainDataModel } from '@vet-client/lib-domain'
import { setLoginDomain } from '../../actions/domain/login-domain.action'

export const initialState: LoginDomainDataModel = {
  email: '',
  password: '',
}

export const loginDomainReducer = createReducer<LoginDomainDataModel>(
  initialState,
  on(setLoginDomain, (state: LoginDomainDataModel, { email, password }) => ({ ...state, email, password })),
)
