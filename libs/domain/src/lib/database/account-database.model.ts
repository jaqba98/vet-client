import { RoleEnum } from '../enum/role.enum'

export interface AccountDatabaseModel {
  id: number
  email: string
  password: string
  firstName: string
  lastName: string
  role: RoleEnum
  pictureUrl: string
}
