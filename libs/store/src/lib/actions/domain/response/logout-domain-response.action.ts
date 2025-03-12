// done
import { createAction, props } from '@ngrx/store'

import { LogoutDomainResponseStoreModel } from '../../../model/domain/response/logout-domain-response-store.model'

export const setLogoutDomainResponse = createAction(
  '[Logout Domain Response] Set',
  props<LogoutDomainResponseStoreModel>(),
)
