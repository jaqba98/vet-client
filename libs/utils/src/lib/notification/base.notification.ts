import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ResponseModel } from './response.model'

@Injectable()
export class BaseNotification<TData> {
  private readonly notification = new Subject<TData>()
  private readonly response = new Subject<ResponseModel>()

  notification$ = this.notification.asObservable()
  response$ = this.response.asObservable()

  runNotification(data: TData) {
    this.notification.next(data)
  }

  runResponse(data: ResponseModel) {
    this.response.next(data)
  }
}
