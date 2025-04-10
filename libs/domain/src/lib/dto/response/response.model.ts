export interface ResponseModel<TData, TMetadata> {
  success: boolean
  messages: string[]
  data: TData
  metadata: TMetadata
}
