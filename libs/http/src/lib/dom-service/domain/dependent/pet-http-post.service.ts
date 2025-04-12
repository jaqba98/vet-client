import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { map, take } from 'rxjs'

import { CookieService } from '@vet-client/lib-system'
import {
  ActionTypeEnum, baseTableFormMaxPageAction,
  baseTableFormRowsAction,
  PetTableFormType,
} from '@vet-client/lib-store'
import {
  DeleteDomainModel, DeleteRequestModel,
  PetDataModel,
  PetDomainModel,
  PetMetadataModel,
  PetRequestModel,
  ResponseModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { HttpExecuteService } from '../../../infrastructure/http-execute.service'
import { PetNotification } from '../../../notification/domain/dependent/pet.notification'
import { MethodEnum } from '../../../enum/method.enum'
import { EndpointEnum } from '../../../enum/endpoint.enum'

@Injectable({ providedIn: 'root' })
export class PetHttpPostService {
  constructor(
    private cookie: CookieService,
    private httpExecute: HttpExecuteService,
    private pet: PetNotification,
    private store: Store<PetTableFormType>,
  ) {}

  createPetPost(domain: PetDomainModel) {
    const request: PetRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<PetDataModel, PetMetadataModel>>({
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
    const request: TokenRequestModel = {
      token: this.cookie.getToken(),
    }
    return this.httpExecute
      .exec<ResponseModel<PetDataModel, PetMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.petRead, request },
      })
      .pipe(
        take(1),
        map((res) => {
          this.store.dispatch(baseTableFormRowsAction<PetDomainModel, PetMetadataModel>(ActionTypeEnum.pet)({
            rows: res.data.pets.map(row => ({
              id: row.id,
              isSelected: false,
              data: row,
            })),
            metadata: res.metadata,
          }))
          this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.pet)())
        }),
      )
  }

  updatePetPost(domain: PetDomainModel) {
    const request: PetRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<PetDataModel, PetMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.petUpdate, request },
      })
      .pipe(
        take(1),
        map((res) => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormUpdateRow<PetDomainModel>(ActionTypeEnum.pet)({
          //     row: {
          //       id: res.data.pets[0].id,
          //       isSelected: false,
          //       row: res.data.pets[0],
          //     },
          //   }),
          // )
          // this.store.dispatch(
          //   baseTableFormUpdateSelectedRow<PetDomainModel>(ActionTypeEnum.pet)({
          //     row: {
          //       id: res.data.pets[0].id,
          //       isSelected: false,
          //       row: res.data.pets[0],
          //     },
          //   }),
          // )
          // this.pet.runResponseUpdate({
          //   success: res.success,
          //   message: res.messages[0],
          // })
        }),
      )
  }

  deletePetPost(domain: DeleteDomainModel) {
    const request: DeleteRequestModel = {
      token: this.cookie.getToken(),
      ...domain,
    }
    return this.httpExecute
      .exec<ResponseModel<PetDataModel, PetMetadataModel>>({
        method: MethodEnum.post,
        type: { endpoint: EndpointEnum.petDelete, request },
      })
      .pipe(
        take(1),
        map(() => {
          // todo: Refactor it
          // this.store.dispatch(
          //   baseTableFormDeleteAction(ActionTypeEnum.pet)({ ids: domain.ids }),
          // )
          // this.store.dispatch(baseTableFormMaxPageAction(ActionTypeEnum.pet)())
        }),
      )
  }
}
