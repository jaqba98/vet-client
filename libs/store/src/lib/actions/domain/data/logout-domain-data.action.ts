// done
import { createAction, props } from '@ngrx/store'

import { LogoutDomainDataStoreModel } from '../../../model/domain/data/logout-domain-data-store.model'

export const setLogoutDomainData = createAction('[Logout Domain Data] Set', props<LogoutDomainDataStoreModel>())
