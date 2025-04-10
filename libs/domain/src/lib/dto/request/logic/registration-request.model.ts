import { AccountDomainModel } from '../../../domain/independent/account-domain.model'

export interface RegistrationRequestModel extends Pick<AccountDomainModel, 'email' | 'password' | 'firstName' | 'lastName'> {
  confirmPassword: string
}
