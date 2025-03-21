import { AccountDatabaseModel } from '../database/account-database.model'

export type LoginDomainModel = Pick<AccountDatabaseModel, 'email' | 'password'>
