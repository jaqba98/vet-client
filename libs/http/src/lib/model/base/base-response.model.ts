export interface BaseResponseModel<TData = undefined> {
  success: boolean
  messages: string[]
  data: TData
}
