// done
import { createAction, props } from '@ngrx/store'

import { LoginDomainDataStoreModel } from '../../../model/domain/data/login-domain-data-store.model'

export const setLoginDomainData = createAction('[Login Domain] Set Login Domain', props<LoginDomainDataStoreModel>())
