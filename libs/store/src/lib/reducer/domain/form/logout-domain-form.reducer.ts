// done
import { createReducer, on } from '@ngrx/store'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { LogoutDomainFormStoreModel } from '../../../model/domain/form/logout-domain-form-store.model'
import { setLogoutDomainForm } from '../../../actions/domain/form/logout-domain-form.action'

const initialState: LogoutDomainFormStoreModel = {
  logout: BaseFormBuilder.buildButtonIcon('logout', faRightFromBracket, 'primary', true),
}

export const logoutDomainFormReducer = createReducer<LogoutDomainFormStoreModel>(
  initialState,
  on(setLogoutDomainForm, (state: LogoutDomainFormStoreModel, { logout }) => ({ ...state, logout })),
)
