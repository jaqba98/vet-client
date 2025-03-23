export interface BaseTableFormStoreModel<TRow> {
  rows: TRow[]
  page: number
  maxPage: number
}
