import { AccountDatabaseModel } from '../database/account-database.model'

export type ChooseRoleDomainModel = Pick<AccountDatabaseModel, 'role'>
