// done
import { createAction, props } from '@ngrx/store'

import { ClinicDomainResponseStoreModel } from '../../../model/domain/response/clinic-domain-response-store.model'

export const setClinicDomainResponse = createAction(
  '[Clinic Domain Response] Set',
  props<ClinicDomainResponseStoreModel>(),
)

export const setClinicDomainCreateResponse = createAction(
  '[Clinic Domain Response] Set Create',
  props<Pick<ClinicDomainResponseStoreModel, 'createResponse'>>(),
)

export const setClinicDomainUpdateResponse = createAction(
  '[Clinic Domain Response] Set Update',
  props<Pick<ClinicDomainResponseStoreModel, 'updateResponse'>>(),
)
