import { AccountDomainModel } from '../../../domain/independent/account-domain.model'

export type ChooseRoleDataModel = Pick<AccountDomainModel, 'role'>
