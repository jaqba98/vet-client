import { ResponseDtoModel } from './response-dto.model'

export interface ResponseDataDtoModel<TData> extends ResponseDtoModel {
  data: TData
}
