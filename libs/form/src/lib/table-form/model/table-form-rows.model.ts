export interface TableFormRowModel<TRow> {
  id: number
  isSelected: boolean
  data: TRow
}

export type TableFormRowsModel<TRow> = TableFormRowModel<TRow>[]
