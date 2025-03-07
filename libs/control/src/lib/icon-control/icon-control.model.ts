import { IconDefinition } from '@fortawesome/angular-fontawesome'

import { ColorType } from '@vet-client/lib-type'

export interface IconControlModel {
  icon: IconDefinition
  color: ColorType
  fontSize: string
}

export interface IconControlClassListModel {
  'icon-control--dark-primary': boolean
  'icon-control--dark-secondary': boolean
  'icon-control--light-primary': boolean
  'icon-control--primary': boolean
  'icon-control--error': boolean
  'icon-control--success': boolean
}
