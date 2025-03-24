import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { ClinicDomainModel, DeleteDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import { baseTableFormCreateAction, baseTableFormDeleteAction, ClinicTableFormType } from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ClinicRequestDtoModel } from '../../model/request/controller/clinic-request-dto.model'
import { ResponseDtoModel } from '../../model/response/response-dto.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { ResponseDataDtoModel } from '../../model/response/response-data-dto.model'
import { ClinicNotification } from '../../notification/clinic.notification'

@Injectable({ providedIn: 'root' })
export class ClinicHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private clinic: ClinicNotification,
    private store: Store<ClinicTableFormType>,
  ) {}

  createClinicPost(domain: ClinicDomainModel) {
    const request: ClinicRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.clinic.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readClinicPost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseDataDtoModel<ClinicDomainModel[]>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormCreateAction<ClinicDomainModel>()({
            rows: res.data.map(row => ({ id: row.id, isSelected: false, row })),
            page: 0,
            maxPage: 0,
            tab: 'table',
          }))
        }),
      )
  }

  updateClinicPost(domain: ClinicDomainModel) {
    const request: ClinicRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicUpdate, request },
      })
      .pipe(take(1))
  }

  deleteClinicPost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction({ ids: domain.ids }))
        }),
      )
  }
}
