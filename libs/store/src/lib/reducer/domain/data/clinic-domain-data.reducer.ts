// done
import { createReducer, on } from '@ngrx/store'

import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'
import {
  clinicDomainDataClinicsAction,
  clinicDomainDataMaxPageAction,
  clinicDomainDataPageAction,
  clinicDomainDataSelectAction,
  clinicDomainDataTabAction,
} from '../../../actions/domain/data/clinic-domain-data-action.service'

const initialState: ClinicDomainDataStoreModel = {
  clinics: [],
  page: 0,
  maxPage: 0,
  tab: 'table',
  // I am here
  selectedPage: -1,
}

export const clinicDomainDataReducer = createReducer<ClinicDomainDataStoreModel>(
  initialState,
  on(clinicDomainDataClinicsAction, (state: ClinicDomainDataStoreModel, { clinics }) => ({ ...state, clinics })),
  on(clinicDomainDataPageAction, (state: ClinicDomainDataStoreModel, { page }) => ({ ...state, page })),
  on(clinicDomainDataMaxPageAction, (state: ClinicDomainDataStoreModel) => {
    return {
      ...state,
      maxPage: state.clinics.length === 0 ? 1 : Math.ceil(state.clinics.length / NUMBER_OF_ROWS_PER_PAGE),
    }
  }),
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
