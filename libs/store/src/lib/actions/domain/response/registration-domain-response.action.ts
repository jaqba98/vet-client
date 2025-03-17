import { createAction, props } from '@ngrx/store'
import {
  RegistrationDomainResponseStoreModel,
} from '../../../model/domain/response/registration-domain-response-store.model'

export const registrationDomainResponseSet = createAction(
  '[Login Domain Response] Set',
  props<RegistrationDomainResponseStoreModel>(),
)
