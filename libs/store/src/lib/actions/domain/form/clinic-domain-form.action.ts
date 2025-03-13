// done
import { createAction, props } from '@ngrx/store'

import { ClinicDomainFormStoreModel } from '../../../model/domain/form/clinic-domain-form-store.model'

export const setClinicDomainForm = createAction('[Clinic Domain Form] Set', props<ClinicDomainFormStoreModel>())
