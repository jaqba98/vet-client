import { AccountDomainModel } from '../independent/account-domain.model'

export interface RegistrationDomainModel extends Pick<AccountDomainModel, 'email' | 'password' | 'firstName' | 'lastName'> {
  confirmPassword: string
}
