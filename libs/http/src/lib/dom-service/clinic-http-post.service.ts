import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { ClinicDomainDataType, setClinicDomainData } from '@vet-client/lib-store'
import { HttpExecuteService } from '../infrastructure/http-execute.service'
import { ClinicReadResponseModel } from '../model/response/clinic-response.model'
import { MethodEnum } from '../enum/method.enum'
import { EndpointEnum } from '../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class ClinicHttpPostService {
  constructor(
    private readonly cookie: CookieService,
    private readonly httpExecute: HttpExecuteService,
    private readonly storeClinicDomainData: Store<ClinicDomainDataType>,
  ) {}

  readPost() {
    const token = this.cookie.getToken()
    return this.httpExecute.exec<ClinicReadResponseModel>({
      method: MethodEnum.post,
      type: { endpoint: EndpointEnum.clinicRead, request: { token } },
    }).pipe(
      take(1),
      map(res => res.clinics),
      map(clinics => this.storeClinicDomainData.dispatch(setClinicDomainData({ clinics }))),
    )
  }
}
