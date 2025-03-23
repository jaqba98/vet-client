import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ResponseModel } from './response.model'

@Injectable()
export class CrudNotification<TDomainModel, TDelete> {
  private readonly notificationCreate = new Subject<TDomainModel>()
  private readonly notificationRead = new Subject<void>()
  private readonly notificationUpdate = new Subject<TDomainModel>()
  private readonly notificationDelete = new Subject<TDelete>()

  private readonly responseCreate = new Subject<ResponseModel>()
  private readonly responseRead = new Subject<ResponseModel>()
  private readonly responseUpdate = new Subject<ResponseModel>()
  private readonly responseDelete = new Subject<ResponseModel>()

  notificationCreate$ = this.notificationCreate.asObservable()
  notificationRead$ = this.notificationRead.asObservable()
  notificationUpdate$ = this.notificationUpdate.asObservable()
  notificationDelete$ = this.notificationDelete.asObservable()

  responseCreate$ = this.responseCreate.asObservable()
  responseRead$ = this.responseRead.asObservable()
  responseUpdate$ = this.responseUpdate.asObservable()
  responseDelete$ = this.responseDelete.asObservable()

  runNotificationCreate(data: TDomainModel) {
    this.notificationCreate.next(data)
  }

  runNotificationRead() {
    this.notificationRead.next()
  }

  runNotificationUpdate(data: TDomainModel) {
    this.notificationUpdate.next(data)
  }

  runNotificationDelete(data: TDelete) {
    this.notificationDelete.next(data)
  }

  runResponseCreate(response: ResponseModel) {
    this.responseCreate.next(response)
  }

  runResponseRead(response: ResponseModel) {
    this.responseRead.next(response)
  }

  runResponseUpdate(response: ResponseModel) {
    this.responseUpdate.next(response)
  }

  runResponseDelete(response: ResponseModel) {
    this.responseDelete.next(response)
  }
}
