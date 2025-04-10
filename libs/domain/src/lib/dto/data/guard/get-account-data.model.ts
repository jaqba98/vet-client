import { AccountDomainModel } from '../../../domain/independent/account-domain.model'

export type GetAccountDataModel = Pick<AccountDomainModel, 'email' | 'firstName' | 'lastName' | 'role' | 'pictureUrl'>
