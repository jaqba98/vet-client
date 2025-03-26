// eslint-disable-next-line
export type SelectOptionType = any

export interface SelectOptionModel {
  label: string
  value: SelectOptionType
}

export interface SelectControlModel {
  label: string
  options: SelectOptionModel[]
}
