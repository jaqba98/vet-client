export interface TableControlColumnModel {
  value: string
}

export type TableControlRowModel = Record<string, TableControlColumnModel>

export type TableControlRowsModel = TableControlRowModel[]
