import { ButtonControlTypeEnum } from './button-control-type.enum'
import { IconControlModel } from '../icon-control/icon-control.model'

interface ButtonControlTextModel {
  type: ButtonControlTypeEnum.text
  text: string
}

interface ButtonControlIconModel {
  type: ButtonControlTypeEnum.icon
  modelIcon: IconControlModel
}

interface ButtonControlLinkModel {
  type: ButtonControlTypeEnum.link
  text: string
}

export type ButtonControlModel =
  | ButtonControlTextModel
  | ButtonControlIconModel
  | ButtonControlLinkModel
