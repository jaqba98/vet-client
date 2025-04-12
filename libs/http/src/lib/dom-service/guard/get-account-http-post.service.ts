import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { accountSetAction, AccountStoreType } from '@vet-client/lib-store'
import { AccountDataModel, AccountMetadataModel, GetAccountRequestModel, ResponseModel } from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { MethodEnum } from '../../enum/method.enum'
import { EndpointEnum } from '../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class GetAccountHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private store: Store<AccountStoreType>,
  ) {}

  getAccountPost() {
    const request: GetAccountRequestModel = { token: this.cookie.getToken() }
    return this.httpExecute
      .exec<ResponseModel<AccountDataModel, AccountMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.getAccount, request },
      })
      .pipe(
        take(1),
        map((res) => {
          if (res.success) {
            this.store.dispatch(accountSetAction({
              email: res.data.accounts[0].email,
              firstName: res.data.accounts[0].firstName,
              lastName: res.data.accounts[0].lastName,
              role: res.data.accounts[0].role,
              pictureUrl: res.data.accounts[0].pictureUrl,
            }))
            return true
          }
          return false
        }),
      )
  }
}
