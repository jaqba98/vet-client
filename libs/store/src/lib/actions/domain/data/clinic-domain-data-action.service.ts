// done
import { createAction, props } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'

export const clinicDomainDataClinicsAction = createAction(
  '[Clinic Domain Data] Set', props<Pick<ClinicDomainDataStoreModel, 'clinics'>>(),
)

export const clinicDomainDataPageAction = createAction(
  '[Clinic Domain Data Action] Set Page', props<Pick<ClinicDomainDataStoreModel, 'page'>>(),
)

export const clinicDomainDataMaxPageAction = createAction('[Clinic Domain Data Action] Set Max Page')

export const clinicDomainDataTabAction = createAction(
  '[Clinic Domain Data Action] Set Tab', props<Pick<ClinicDomainDataStoreModel, 'tab'>>(),
)

export const clinicDomainDataSelectAction = createAction(
  '[Clinic Domain Data Action] Set Select', props<{ id: number, isSelected: boolean }>(),
)

// I am here

export const setClinicDomainData = createAction('[Clinic Domain Data] Set', props<ClinicDomainDataStoreModel>())

export const setClinicDomainSelectedClinic = createAction(
  '[Clinic Domain Data] Set Selected Clinic', props<{ selectedPage: number }>(),
)
