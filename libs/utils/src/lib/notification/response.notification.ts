import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ResponseModel } from './response.model'

@Injectable()
export class ResponseNotification {
  private readonly response = new Subject<ResponseModel>()

  response$ = this.response.asObservable()

  runResponse(data: ResponseModel) {
    this.response.next(data)
  }
}
