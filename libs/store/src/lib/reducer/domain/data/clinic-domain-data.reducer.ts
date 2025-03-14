// done
import { createReducer, on } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'
import {
  clinicDomainDataClinicsAction,
  clinicDomainDataPageAction,
  clinicDomainDataSelectAction,
  clinicDomainDataTabAction,
} from '../../../actions/domain/data/clinic-domain-data-action.service'

const initialState: ClinicDomainDataStoreModel = {
  clinics: [],
  page: -1,
  tab: 'table',
  // I am here
  selectedPage: -1,
}

export const clinicDomainDataReducer = createReducer<ClinicDomainDataStoreModel>(
  initialState,
  on(clinicDomainDataClinicsAction, (state: ClinicDomainDataStoreModel, { clinics }) => ({ ...state, clinics })),
  on(clinicDomainDataPageAction, (state: ClinicDomainDataStoreModel, { page }) => ({ ...state, page })),
  on(clinicDomainDataTabAction, (state: ClinicDomainDataStoreModel, { tab }) => ({ ...state, tab })),
  on(clinicDomainDataSelectAction, (state: ClinicDomainDataStoreModel, { id, isSelected }) => ({
    ...state,
    clinics: state.clinics.map((clinic) => {
      if (clinic.id === id) {
        return { ...clinic, isSelected }
      }
      return clinic
    }),
  })),
)
