// done
import { createAction, props } from '@ngrx/store'

import { LoginDomainStoreModel } from '../../model/domain/login-domain-store.model'

export const setLoginDomain = createAction('[Login Domain] Set Login Domain', props<LoginDomainStoreModel>())
