import { AccountDatabaseModel } from '../database/account-database.model'

export interface RegistrationDomainModel extends Omit<AccountDatabaseModel, 'id'> {
  confirmPassword: string
}
