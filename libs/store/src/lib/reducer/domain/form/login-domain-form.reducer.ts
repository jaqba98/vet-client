import { createReducer, on } from '@ngrx/store'

import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { LoginDomainFormStoreModel } from '../../../model/domain/form/login-domain-form-store.model'
import { loginDomainFormAction } from '../../../actions/domain/form/login-domain-form.action'

export const initialState: LoginDomainFormStoreModel = {
  email: BaseFormBuilder.buildInputText('Email', [], true),
  password: BaseFormBuilder.buildInputPassword('Password', [], true),
  login: BaseFormBuilder.buildButtonText('login', 'Login', 'primary', true),
}

export const loginDomainFormReducer = createReducer<LoginDomainFormStoreModel>(
  initialState,
  on(loginDomainFormAction, (state: LoginDomainFormStoreModel, { email, password, login }) => ({
    ...state, email, password, login,
  })),
)
