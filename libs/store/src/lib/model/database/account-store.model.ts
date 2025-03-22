import { AccountDatabaseModel } from '@vet-client/lib-domain'

export interface AccountStoreModel {
  account: Omit<AccountDatabaseModel, 'id' | 'password'>
}
