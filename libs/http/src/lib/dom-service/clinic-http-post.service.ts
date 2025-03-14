import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import { ClinicDomainDataType, setClinicDomainClinicsData } from '@vet-client/lib-store'
import { HttpExecuteService } from '../infrastructure/http-execute.service'
import {
  ClinicCreateResponseModel,
  ClinicDeleteResponseModel,
  ClinicReadResponseModel,
} from '../model/response/clinic-response.model'
import { MethodEnum } from '../enum/method.enum'
import { EndpointEnum } from '../enum/endpoint.enum'
import { ClinicCreateRequestModel, ClinicDeleteRequestModel } from '../model/request/clinic-request.model'
import { ClinicDomainDataModel } from '@vet-client/lib-domain'

@Injectable({ providedIn: 'root' })
export class ClinicHttpPostService {
  constructor(
    private readonly cookie: CookieService,
    private readonly httpExecute: HttpExecuteService,
    private readonly storeClinicDomainData: Store<ClinicDomainDataType>,
  ) {}

  clinicCreatePost(client: ClinicDomainDataModel) {
    const token = this.cookie.getToken()
    const request: ClinicCreateRequestModel = { token, ...client }
    return this.httpExecute
      .exec<ClinicCreateResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicCreate, request },
      })
      .pipe(take(1))
  }

  readPost() {
    const token = this.cookie.getToken()
    return this.httpExecute.exec<ClinicReadResponseModel>({
      method: MethodEnum.post,
      type: { endpoint: EndpointEnum.clinicRead, request: { token } },
    }).pipe(
      take(1),
      map(res => res.clinics.map(clinic => ({ id: clinic.id, isSelected: false, data: clinic }))),
      map(clinics => this.storeClinicDomainData.dispatch(setClinicDomainClinicsData({ clinics }))),
    )
  }

  deletePost(ids: number[]) {
    const token = this.cookie.getToken()
    const request: ClinicDeleteRequestModel = { token, ids }
    return this.httpExecute
      .exec<ClinicDeleteResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.clinicDelete, request },
      })
      .pipe(take(1))
  }
}
