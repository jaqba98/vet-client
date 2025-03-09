import { ControlType } from '@vet-client/lib-base-form'

interface LoginDomainModel<T> {
  email: T
  password: T
  login: T
}

export type LoginDomainFormDataModel = LoginDomainModel<ControlType>

export type LoginDomainDataModel = Omit<LoginDomainModel<string>, 'login'>
