import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  clinicDomainDataClinicsAction,
  ClinicDomainDataType,
  ClinicDomainResponseType,
  setClinicDomainCreateResponse,
} from '@vet-client/lib-store'
import { ClinicDomainDataInternalModel } from '@vet-client/lib-domain'
import { HttpExecuteService } from '../infrastructure/http-execute.service'
import {
  ClinicCreateResponseModel,
  ClinicDeleteResponseModel,
  ClinicReadResponseModel,
} from '../model/response/clinic-response.model'
import { MethodEnum } from '../enum/method.enum'
import { EndpointEnum } from '../enum/endpoint.enum'
import {
  ClinicCreateRequestModel,
  ClinicDeleteRequestModel,
} from '../model/request/clinic-request.model'
import { TokenRequestDtoModel } from '../model/base/token-request-dto.model'

@Injectable({ providedIn: 'root' })
export class ClinicHttpPostService {
  constructor(
    private readonly cookie: CookieService,
    private readonly httpExecute: HttpExecuteService,
    private readonly storeClinicDomainData: Store<ClinicDomainDataType>,
    private readonly storeClinicDomainResponse: Store<ClinicDomainResponseType>,
  ) {}

  clinicCreatePost(client: ClinicDomainDataInternalModel) {
    const token = this.cookie.getToken()
    const request: ClinicCreateRequestModel = { token, ...client }
    return this.httpExecute
      .exec<ClinicCreateResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetClinicCreate, request },
      })
      .pipe(
        take(1),
        map((response) => {
          console.log(response)
          const createData = {
            createResponse: {
              success: response.success,
              message: response.messages[0],
            },
          }
          return this.storeClinicDomainResponse.dispatch(setClinicDomainCreateResponse(createData))
        }),
      )
  }

  readPost() {
    const token = this.cookie.getToken()
    const request: TokenRequestDtoModel = { token }
    return this.httpExecute
      .exec<ClinicReadResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetClinicRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          return res.data.map(clinic => ({ id: clinic.id, isSelected: false, data: clinic }))
        }),
        map((clinics) => {
          this.storeClinicDomainData.dispatch(clinicDomainDataClinicsAction({ clinics }))
          return clinics
        }),
      )
  }

  deletePost(ids: number[]) {
    const token = this.cookie.getToken()
    const request: ClinicDeleteRequestModel = { token, ids }
    return this.httpExecute
      .exec<ClinicDeleteResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.vetClinicDelete, request },
      })
      .pipe(take(1))
  }
}
