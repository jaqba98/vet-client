// done
import { createReducer, on } from '@ngrx/store'
import {
  RegistrationDomainResponseStoreModel,
} from '../../../model/domain/response/registration-domain-response-store.model'
import { registrationDomainResponseSet } from '../../../actions/domain/response/registration-domain-response.action'

const initialState: RegistrationDomainResponseStoreModel = {
  success: false,
  message: '',
}

export const registrationDomainResponseReducer = createReducer<RegistrationDomainResponseStoreModel>(
  initialState,
  on(registrationDomainResponseSet, (state: RegistrationDomainResponseStoreModel, { success, message }) => ({
    ...state, success, message,
  })),
)
