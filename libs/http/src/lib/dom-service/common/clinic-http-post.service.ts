import { Injectable } from '@angular/core'
import { take } from 'rxjs'

import { ClinicDomainDataModel, DeleteDomainDataModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ClinicRequestDtoModel } from '../../model/request/controller/clinic-request-dto.model'
import { ResponseDtoModel } from '../../model/response/response-dto.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { ResponseDataDtoModel } from '../../model/response/response-data-dto.model'

@Injectable({ providedIn: 'root' })
export class ClinicHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
  ) {}

  createClinicPost(domain: ClinicDomainDataModel) {
    const request: ClinicRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicCreate, request },
      })
      .pipe(take(1))
  }

  readClinicPost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseDataDtoModel<ClinicDomainDataModel[]>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicRead, request },
      })
      .pipe(take(1))
  }

  updateClinicPost(domain: ClinicDomainDataModel) {
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

  deleteClinicPost(domain: DeleteDomainDataModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseDtoModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicDelete, request },
      })
      .pipe(take(1))
  }
}
