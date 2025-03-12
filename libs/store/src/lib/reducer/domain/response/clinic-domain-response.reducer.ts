// done
import { createReducer, on } from '@ngrx/store'

import { ClinicDomainResponseStoreModel } from '../../../model/domain/response/clinic-domain-response-store.model'
import {
  setClinicDomainCreateResponse,
  setClinicDomainResponse, setClinicDomainUpdateResponse,
} from '../../../actions/domain/response/clinic-domain-response.action'

const initialState: ClinicDomainResponseStoreModel = {
  createResponse: { success: false, error: '' },
  updateResponse: { success: false, error: '' },
}

export const clinicDomainResponseReducer = createReducer<ClinicDomainResponseStoreModel>(
  initialState,
  on(setClinicDomainResponse, (state: ClinicDomainResponseStoreModel, { createResponse, updateResponse }) => ({
    ...state, createResponse, updateResponse,
  })),
  on(setClinicDomainCreateResponse, (state: ClinicDomainResponseStoreModel, { createResponse }) => ({
    ...state, createResponse,
  })),
  on(setClinicDomainUpdateResponse, (state: ClinicDomainResponseStoreModel, { updateResponse }) => ({
    ...state, updateResponse,
  })),
)
