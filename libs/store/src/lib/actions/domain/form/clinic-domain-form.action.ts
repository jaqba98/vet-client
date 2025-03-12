// done
import { createAction, props } from '@ngrx/store'

import { ClinicDomainFormStoreModel } from '../../../model/domain/form/clinic-domain-form-store.model'

export const setClinicDomainForm = createAction('[Clinic Domain Form] Set', props<ClinicDomainFormStoreModel>())

export const setClinicDomainCreateForm = createAction(
  '[Clinic Domain Form] Set Create', props<Pick<ClinicDomainFormStoreModel, 'createForm'>>(),
)

export const setClinicDomainUpdateForm = createAction(
  '[Clinic Domain Form] Set Update', props<Pick<ClinicDomainFormStoreModel, 'updateForm'>>(),
)
