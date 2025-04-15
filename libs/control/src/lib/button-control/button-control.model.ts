import { IconControlModel } from '../icon-control/icon-control.model'

interface ButtonControlTextModel {
  type: 'text'
  text: string
}

interface ButtonControlIconModel {
  type: 'icon'
  icon: IconControlModel
}

export type ButtonControlModel =
  | ButtonControlTextModel
  | ButtonControlIconModel
