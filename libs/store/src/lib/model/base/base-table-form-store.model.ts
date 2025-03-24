export interface BaseTableFormRowModel<TRow> {
  id: number
  isSelected: boolean
  row: TRow
}

export interface BaseTableFormStoreModel<TRow> {
  rows: BaseTableFormRowModel<TRow>[]
  page: number
  maxPage: number
  tab: string
}
