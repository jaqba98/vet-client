import { ButtonControlTypeEnum } from './button-control-type.enum'

export interface ButtonControlTextModel {
  type: ButtonControlTypeEnum.text
  text: string
}

export interface ButtonControlIconModel {
  type: ButtonControlTypeEnum.icon
}

export interface ButtonControlLinkModel {
  type: ButtonControlTypeEnum.link
  text: string
}

export type ButtonControlModel =
  | ButtonControlTextModel
  | ButtonControlIconModel
  | ButtonControlLinkModel
