import { IconControlModel } from '../icon-control/icon-control.model'
import { ColorType } from '@vet-client/lib-type'

interface TextValueModel {
  type: 'text'
  text: string
}

interface IconValueModel {
  type: 'icon'
  icon: IconControlModel
}

interface LinkValueModel {
  type: 'link'
  text: string
}

type ValueType = TextValueModel | IconValueModel | LinkValueModel

export interface ButtonControlModel {
  id: string
  value: ValueType
  fullWidth: boolean
  color: ColorType
  isSquare: boolean
}
