export interface TableFormRowModel<TRow> {
  id: number
  isSelected: boolean
  domain: TRow
}

export type TableFormRowsModel<TRow> = TableFormRowModel<TRow>[]
