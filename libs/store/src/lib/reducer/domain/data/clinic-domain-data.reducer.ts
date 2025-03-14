// done
import { createReducer, on } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'
import {
  setClinicDomainClinicsData,
  setClinicDomainData,
  setClinicDomainPageData,
  setClinicDomainSelection,
} from '../../../actions/domain/data/clinic-domain-data.action'

const initialState: ClinicDomainDataStoreModel = { page: 1, clinics: [] }

export const clinicDomainDataReducer = createReducer<ClinicDomainDataStoreModel>(
  initialState,
  on(setClinicDomainData, (state: ClinicDomainDataStoreModel, { page, clinics }) => ({
    ...state,
    page: page ? page : state.page,
    clinics: clinics ? clinics : state.clinics,
  })),
  on(setClinicDomainClinicsData, (state: ClinicDomainDataStoreModel, { clinics }) => ({ ...state, clinics })),
  on(setClinicDomainPageData, (state: ClinicDomainDataStoreModel, { page }) => ({ ...state, page })),
  on(setClinicDomainSelection, (state: ClinicDomainDataStoreModel, { id, isSelected }) => ({
    ...state,
    clinics: state.clinics.map(clinic => clinic.id === id ? { ...clinic, isSelected } : clinic),
  })),
)
