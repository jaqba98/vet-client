// done
import { createReducer, on } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'
import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import {
  clinicDomainDataClinicsAction,
  clinicDomainDataMaxPageAction,
  clinicDomainDataPageAction,
  clinicDomainDataTabAction,
  setClinicDomainData,
  setClinicDomainSelectedClinic,
  setClinicDomainSelection,
} from '../../../actions/domain/data/clinic-domain-data-action.service'

const initialState: ClinicDomainDataStoreModel = {
  clinics: [],
  page: -1,
  maxPage: -1,
  tab: 'table',
  // I am here
  selectedPage: -1,
}

export const clinicDomainDataReducer = createReducer<ClinicDomainDataStoreModel>(
  initialState,
  on(clinicDomainDataClinicsAction, (state: ClinicDomainDataStoreModel, { clinics }) => ({ ...state, clinics })),
  on(clinicDomainDataPageAction, (state: ClinicDomainDataStoreModel, { page }) => ({ ...state, page })),
  on(clinicDomainDataMaxPageAction, (state: ClinicDomainDataStoreModel) => ({
    ...state,
    maxPage: state.clinics.length === 0 ? 1 : Math.ceil(state.clinics.length / NUMBER_OF_ROWS_PER_PAGE),
  })),
  on(clinicDomainDataTabAction, (state: ClinicDomainDataStoreModel, { tab }) => ({ ...state, tab })),
  // I am here
  // I am here
  on(setClinicDomainData, (state: ClinicDomainDataStoreModel, { page, clinics }) => ({
    ...state,
    page: page ? page : state.page,
    clinics: clinics ? clinics : state.clinics,
  })),
  on(setClinicDomainSelection, (state: ClinicDomainDataStoreModel, { id, isSelected }) => ({
    ...state,
    clinics: state.clinics.map(clinic => clinic.id === id ? { ...clinic, isSelected } : clinic),
  })),
  on(setClinicDomainSelectedClinic, (state: ClinicDomainDataStoreModel, { selectedPage }) => ({ ...state, selectedPage })),
)
