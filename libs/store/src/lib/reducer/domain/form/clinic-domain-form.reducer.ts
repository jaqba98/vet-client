// done
import { createReducer, on } from '@ngrx/store'
import { Validators } from '@angular/forms'

import { BaseFormBuilder } from '@vet-client/lib-base-form'
import { ClinicDomainFormStoreModel } from '../../../model/domain/form/clinic-domain-form-store.model'
import { setClinicDomainForm } from '../../../actions/domain/form/clinic-domain-form.action'

const initialState: ClinicDomainFormStoreModel = {
  name: BaseFormBuilder.buildInputText('Name', [Validators.required, Validators.maxLength(255)], true),
  street: BaseFormBuilder.buildInputText('Street', [Validators.required, Validators.maxLength(255)], true),
  buildingNumber: BaseFormBuilder.buildInputText('Building number', [Validators.required, Validators.maxLength(255)], true),
  apartmentNumber: BaseFormBuilder.buildInputText('Apartment Number', [Validators.required, Validators.maxLength(255)], true),
  postalCode: BaseFormBuilder.buildInputText('Postal code', [Validators.required, Validators.maxLength(255)], true),
  city: BaseFormBuilder.buildInputText('City', [Validators.required, Validators.maxLength(255)], true),
  province: BaseFormBuilder.buildInputText('Province', [Validators.required, Validators.maxLength(255)], true),
  country: BaseFormBuilder.buildInputText('Country', [Validators.required, Validators.maxLength(255)], true),
  email: BaseFormBuilder.buildInputText('Email', [Validators.required, Validators.maxLength(255)], true),
  phoneNumber: BaseFormBuilder.buildInputText('Phone number', [Validators.required, Validators.maxLength(255)], true),
}

export const clinicDomainFormReducer = createReducer<ClinicDomainFormStoreModel>(
  initialState,
  on(setClinicDomainForm, (state: ClinicDomainFormStoreModel, { name }) => ({
    ...state, name,
  })),
)
