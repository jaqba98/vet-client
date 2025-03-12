// done
import { createAction, props } from '@ngrx/store'

import { LogoutDomainFormStoreModel } from '../../../model/domain/form/logout-domain-form-store.model'

export const setLogoutDomainForm = createAction('[Logout Domain Form] Set', props<LogoutDomainFormStoreModel>())
