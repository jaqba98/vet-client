// done
import { createAction, props } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'

export const setClinicDomainData = createAction('[Clinic Domain Data] Set', props<ClinicDomainDataStoreModel>())

export const setClinicDomainClinicsData = createAction(
  '[Clinic Domain Data] Set', props<Pick<ClinicDomainDataStoreModel, 'clinics'>>(),
)

export const setClinicDomainPageData = createAction(
  '[Clinic Domain Data] Set Page', props<Pick<ClinicDomainDataStoreModel, 'page'>>(),
)

export const setClinicDomainSelection = createAction(
  '[Clinic Domain Data] Set Selection', props<{ id: number, isSelected: boolean }>(),
)

export const setClinicDomainSelectedClinic = createAction(
  '[Clinic Domain Data] Set Selected Clinic', props<{ selectedPage: number }>(),
)

export const setClinicDomainTab = createAction(
  '[Clinic Domain Data] Set Tab', props<{ tab: string }>(),
)
