import { ControlButtonModel, ControlRadioButtonModel } from '@vet-client/lib-base-form'
import { RoleEnum } from '../enum/role.enum'

export interface ChooseRoleDomainFormModel {
  role: ControlRadioButtonModel
  save: ControlButtonModel
}

export interface ChooseRoleDomainDataModel {
  role: RoleEnum
}
