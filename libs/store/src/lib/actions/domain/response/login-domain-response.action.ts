import { createAction, props } from '@ngrx/store'

import { LoginDomainResponseStoreModel } from '../../../model/domain/response/login-domain-response-store.model'

export const loginDomainResponseAction = createAction(
  '[Login Domain Response] Set',
  props<LoginDomainResponseStoreModel>(),
)
