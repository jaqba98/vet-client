// done
import { createAction, props } from '@ngrx/store'

import { LoginDomainFormStoreModel } from '../../../model/domain/form/login-domain-form-store.model'

export const setLoginDomainForm = createAction('[Login Domain Form] Set', props<LoginDomainFormStoreModel>())
