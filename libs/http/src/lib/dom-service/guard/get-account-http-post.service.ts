import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { accountSetAction, AccountStoreType } from '@vet-client/lib-store'
import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { GuardRequestDtoModel } from '../../model/request/guard/guard-request-dto.model'
import { AccountDatabaseModel } from '@vet-client/lib-domain'
import { ResponseModel } from '../../model/response/response.model'

@Injectable({ providedIn: 'root' })
export class GetAccountHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private store: Store<AccountStoreType>,
  ) {}

  getAccountPost() {
    const request: GuardRequestDtoModel = { token: this.cookie.getToken() }
    return this.httpExecute
      .exec<ResponseModel<AccountDatabaseModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.getAccount, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            this.store.dispatch(accountSetAction({
              email: res.data.email,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              role: res.data.role,
              pictureUrl: res.data.pictureUrl,
            }))
            return true
          }
          return false
        }),
      )
  }
}
