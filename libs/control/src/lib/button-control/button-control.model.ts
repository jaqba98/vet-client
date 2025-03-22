import { IconControlModel } from '../icon-control/icon-control.model'
import { ColorType } from '@vet-client/lib-type'

interface BaseValueModel {
  id: string
  buttonColor: ColorType
}

interface TextValueModel extends BaseValueModel {
  type: 'text'
  text: string
}

interface IconValueModel extends BaseValueModel, IconControlModel {
  type: 'icon'
}

interface LinkValueModel extends BaseValueModel {
  type: 'link'
  text: string
}

export type ButtonControlModel = TextValueModel | IconValueModel | LinkValueModel
