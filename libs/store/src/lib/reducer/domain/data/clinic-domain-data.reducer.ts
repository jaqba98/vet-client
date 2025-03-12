// done
import { createReducer, on } from '@ngrx/store'

import { ClinicDomainDataStoreModel } from '../../../model/domain/data/clinic-domain-data-store.model'
import { setClinicDomainData } from '../../../actions/domain/data/clinic-domain-data.action'

const initialState: ClinicDomainDataStoreModel = { clinics: [] }

export const clinicDomainDataReducer = createReducer<ClinicDomainDataStoreModel>(
  initialState,
  on(setClinicDomainData, (state: ClinicDomainDataStoreModel, { clinics }) => ({ ...state, clinics })),
)
