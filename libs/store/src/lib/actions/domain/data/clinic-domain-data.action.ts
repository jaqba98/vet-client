// done
import { createAction, props } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'

export const setClinicDomainData = createAction('[Clinic Domain Data] Set', props<ClinicDomainDataStoreModel>())
