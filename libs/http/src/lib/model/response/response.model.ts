export interface ResponseModel<TData = null, TMetadata = null> {
  success: boolean
  messages: string[]
  data: TData
  metadata: TMetadata
}
