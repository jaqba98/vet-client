export interface ResponseModel<TData> {
  success: boolean
  errors: string[]
  data: TData
}
