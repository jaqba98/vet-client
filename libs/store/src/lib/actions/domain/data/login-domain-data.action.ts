import { createAction, props } from '@ngrx/store'

import { LoginDomainDataStoreModel } from '../../../model/domain/data/login-domain-data-store.model'

export const loginDomainDataAction = createAction('[Login Domain Data] Set', props<LoginDomainDataStoreModel>())
