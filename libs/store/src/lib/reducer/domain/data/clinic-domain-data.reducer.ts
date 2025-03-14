// done
import { createReducer, on } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'
import { NUMBER_OF_ROWS_PER_PAGE } from '@vet-client/lib-const'
import {
  setClinicDomainClinicsData,
  setClinicDomainData,
  setClinicDomainPageData,
  setClinicDomainSelectedClinic,
  setClinicDomainSelection,
  setClinicDomainTab,
} from '../../../actions/domain/data/clinic-domain-data.action'

const initialState: ClinicDomainDataStoreModel = {
  page: 1,
  maxPage: 1,
  selectedPage: -1,
  tab: 'table',
  clinics: [],
}

export const clinicDomainDataReducer = createReducer<ClinicDomainDataStoreModel>(
  initialState,
  on(setClinicDomainData, (state: ClinicDomainDataStoreModel, { page, clinics }) => ({
    ...state,
    page: page ? page : state.page,
    maxPage: clinics.length === 0 ? 1 : Math.ceil(state.clinics.length / NUMBER_OF_ROWS_PER_PAGE),
    clinics: clinics ? clinics : state.clinics,
  })),
  on(setClinicDomainClinicsData, (state: ClinicDomainDataStoreModel, { clinics }) => ({ ...state, clinics })),
  on(setClinicDomainPageData, (state: ClinicDomainDataStoreModel, { page }) => ({ ...state, page })),
  on(setClinicDomainSelection, (state: ClinicDomainDataStoreModel, { id, isSelected }) => ({
    ...state,
    clinics: state.clinics.map(clinic => clinic.id === id ? { ...clinic, isSelected } : clinic),
  })),
  on(setClinicDomainSelectedClinic, (state: ClinicDomainDataStoreModel, { selectedPage }) => ({ ...state, selectedPage })),
  on(setClinicDomainTab, (state: ClinicDomainDataStoreModel, { tab }) => ({ ...state, tab })),
)
