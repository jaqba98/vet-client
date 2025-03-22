// done
import { createReducer, on } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ClinicDomainFormStoreModel } from '../../../model/domain/form/clinic-domain-form-store.model'
import { setClinicDomainForm } from '../../../actions/domain/form/clinic-domain-form.action'

const initialState: ClinicDomainFormStoreModel = {
  name: BaseFormBuilder.buildInputText('Name', [Validators.required, Validators.maxLength(255)]),
  street: BaseFormBuilder.buildInputText('Street', [Validators.required, Validators.maxLength(255)]),
  buildingNumber: BaseFormBuilder.buildInputText('Building number', [Validators.required, Validators.maxLength(255)]),
  apartmentNumber: BaseFormBuilder.buildInputText('Apartment Number', [Validators.required, Validators.maxLength(255)]),
  postalCode: BaseFormBuilder.buildInputText('Postal code', [Validators.required, Validators.maxLength(255)]),
  city: BaseFormBuilder.buildInputText('City', [Validators.required, Validators.maxLength(255)]),
  province: BaseFormBuilder.buildInputText('Province', [Validators.required, Validators.maxLength(255)]),
  country: BaseFormBuilder.buildInputText('Country', [Validators.required, Validators.maxLength(255)]),
  email: BaseFormBuilder.buildInputText('Email', [Validators.required, Validators.maxLength(255)]),
  phoneNumber: BaseFormBuilder.buildInputText('Phone number', [Validators.required, Validators.maxLength(255)]),
}

export const clinicDomainFormReducer = createReducer<ClinicDomainFormStoreModel>(
  initialState,
  on(setClinicDomainForm, (state: ClinicDomainFormStoreModel, { name }) => ({
    ...state, name,
  })),
)
