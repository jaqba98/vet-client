// done
import { createReducer, on } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ClinicDomainFormStoreModel } from '../../../model/domain/form/clinic-domain-form-store.model'
import { setClinicDomainForm } from '../../../actions/domain/form/clinic-domain-form.action'

const initialState: ClinicDomainFormStoreModel = {
  name: BaseFormBuilder.buildInputText('Name', [Validators.required, Validators.maxLength(255)], true),
}

export const clinicDomainFormReducer = createReducer<ClinicDomainFormStoreModel>(
  initialState,
  on(setClinicDomainForm, (state: ClinicDomainFormStoreModel, { name }) => ({
    ...state, name,
  })),
)
