export interface ResponseModel<TData> {
  success: boolean
  messages: string[]
  data: TData
}
