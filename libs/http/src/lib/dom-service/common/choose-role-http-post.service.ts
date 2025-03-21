import { Injectable } from '@angular/core'
import { take } from 'rxjs'

import { ChooseRoleDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { ChooseRoleRequestDtoModel } from '../../model/request/controller/choose-role-request-dto.model'
import { ResponseDtoModel } from '../../model/response/response-dto.model'

@Injectable({ providedIn: 'root' })
export class ChooseRoleHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
  ) {}

  chooseRolePost(domain: ChooseRoleDomainModel) {
    const request: ChooseRoleRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.chooseRole, request },
      })
      .pipe(take(1))
  }
}
