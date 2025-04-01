import { Injectable } from '@angular/core'
import { map, take } from 'rxjs'
import { Store } from '@ngrx/store'

import { DeleteDomainModel, MedicationDomainModel, PetDomainModel } from '@vet-client/lib-domain'
import { CookieService } from '@vet-client/lib-system'
import {
  baseTableFormRowsAction,
  baseTableFormDeleteAction,
  baseTableFormUpdateRow,
  baseTableFormUpdateSelectedRow,
  baseTableFormMaxPageAction, ActionTypeEnum, PetTableFormType,
} from '@vet-client/lib-store'
import { HttpExecuteService } from '../../infrastructure/http-execute.service'
import { ResponseModel } from '../../model/response/response.model'
import { EndpointEnum } from '../../enum/endpoint.enum'
import { MethodEnum } from '../../enum/method.enum'
import { DeleteRequestDtoModel } from '../../model/request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../model/base/token-request-dto.model'
import { MedicationRequestDtoModel } from '../../model/request/controller/medication-request-dto.model'
import { PetNotification } from '../../notification/pet.notification'
import { PetRequestDtoModel } from '../../model/request/controller/pet-request-dto.model'

@Injectable({ providedIn: 'root' })
export class PetHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private pet: PetNotification,
    private store: Store<PetTableFormType>,
  ) {}

  createPetPost(domain: PetDomainModel) {
    const request: PetRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.petCreate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.pet.runResponseCreate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  readPetPost() {
    const request: TokenRequestDtoModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<{ pets: PetDomainModel[] }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.petRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<PetDomainModel>(ActionTypeEnum.pet)({
            rows: res.data.pets.map(row => ({ id: row.id, isSelected: false, row })),
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.pet)())
        }),
      )
  }

  updatePetPost(domain: PetDomainModel) {
    const request: PetRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<{ pet: PetDomainModel }>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.petUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormUpdateRow<PetDomainModel>(ActionTypeEnum.pet)({
            row: { id: res.data.pet.id, isSelected: false, row: res.data.pet },
          }))
          this.store.dispatch(baseTableFormUpdateSelectedRow<PetDomainModel>(ActionTypeEnum.pet)({
            row: { id: res.data.pet.id, isSelected: false, row: res.data.pet },
          }))
          this.pet.runResponseUpdate({ success: res.success, message: res.messages[0] })
        }),
      )
  }

  deletePetPost(domain: DeleteDomainModel) {
    const request: DeleteRequestDtoModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.petDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          this.store.dispatch(baseTableFormDeleteAction(ActionTypeEnum.pet)({ ids: domain.ids }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.pet)())
        }),
      )
  }
}
