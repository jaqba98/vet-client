import { AccountDatabaseModel } from '@vet-client/lib-domain'

export type AccountStoreModel = Omit<AccountDatabaseModel, 'id' | 'password'>
