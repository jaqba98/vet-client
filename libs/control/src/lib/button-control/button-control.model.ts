import { ButtonControlTypeEnum } from './button-control-type.enum'

interface ButtonControlTextModel {
  type: ButtonControlTypeEnum.text
  text: string
}

interface ButtonControlIconModel {
  type: ButtonControlTypeEnum.icon
}

interface ButtonControlLinkModel {
  type: ButtonControlTypeEnum.link
  text: string
}

export type ButtonControlModel =
  | ButtonControlTextModel
  | ButtonControlIconModel
  | ButtonControlLinkModel
