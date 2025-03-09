import { ControlType } from '@vet-client/lib-base-form'

interface LogoutDomainModel<T> {
  logout: T
}

export type LogoutDomainFormDataModel = LogoutDomainModel<ControlType>

export type LogoutDomainDataModel = Omit<LogoutDomainModel<string>, 'logout'>
