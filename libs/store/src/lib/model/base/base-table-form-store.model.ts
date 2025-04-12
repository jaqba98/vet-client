export interface BaseTableFormRowModel<TData> {
  id: number
  isSelected: boolean
  data: TData
}

export interface BaseTableFormStoreModel<TData, TMetadata> {
  rows: BaseTableFormRowModel<TData>[]
  page: number
  maxPage: number
  tab: string
  metadata: TMetadata
  selectedRow?: BaseTableFormRowModel<TData>
}
