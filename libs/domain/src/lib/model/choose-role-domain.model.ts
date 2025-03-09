import { ControlType } from '@vet-client/lib-base-form'

interface ChooseRoleDomainModel<T> {
  role: T
  save: T
}

export type ChooseRoleDomainFormDataModel = ChooseRoleDomainModel<ControlType>

export type ChooseRoleDomainDataModel = Omit<ChooseRoleDomainModel<string>, 'save'>
