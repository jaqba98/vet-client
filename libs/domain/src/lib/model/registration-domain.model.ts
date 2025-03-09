import { ControlType } from '@vet-client/lib-base-form'

interface RegistrationDomainModel<T> {
  email: T
  password: T
  confirmPassword: T
  firstName: T
  lastName: T
  register: T
}

export type RegistrationDomainFormDataModel = RegistrationDomainModel<ControlType>

export type RegistrationDomainDataModel = Omit<RegistrationDomainModel<string>, 'register'>
