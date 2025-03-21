import { Injectable } from '@angular/core'
import { take } from 'rxjs'

import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { LogoutRequestDtoModel } from '../../model/request/controller/logout-request-dto.model'
import { ResponseDtoModel } from '../../model/response/response-dto.model'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class LogoutHttpPostService {
  constructor(private httpExecute: HttpExecuteService) {}

  logoutPost() {
    const request: LogoutRequestDtoModel = undefined
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.logout, request },
      })
      .pipe(take(1))
  }
}
