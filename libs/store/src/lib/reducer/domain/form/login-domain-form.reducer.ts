// done
import { createReducer, on } from '@ngrx/store'

import { LoginDomainFormStoreModel } from '../../../model/domain/form/login-domain-form-store.model'
import { setLoginDomainForm } from '../../../actions/domain/form/login-domain-form.action'

export const initialState: LoginDomainFormStoreModel = {
  email: {
    kind: 'input',
    type: 'text',
    label: 'Email',
    placeholder: '',
    defaultValue: '',
    validators: [],
    isEnabled: true,
  },
  password: {
    kind: 'input',
    type: 'password',
    label: 'Password',
    placeholder: '',
    defaultValue: '',
    validators: [],
    isEnabled: true,
  },
  login: {
    id: 'login',
    kind: 'button',
    value: {
      type: 'text',
      text: 'Login',
    },
    defaultValue: false,
    fullWidth: false,
    color: 'primary',
    isEnabled: true,
    width40px: false,
  },
}

export const loginDomainFormReducer = createReducer<LoginDomainFormStoreModel>(
  initialState,
  on(setLoginDomainForm, (state: LoginDomainFormStoreModel, { email, password, login }) => ({
    ...state, email, password, login,
  })),
)
