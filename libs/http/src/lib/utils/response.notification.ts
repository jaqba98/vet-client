import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { ResponseModel } from '@vet-client/lib-domain'

@Injectable()
export class ResponseNotification {
  private readonly response = new Subject<ResponseModel>()

  response$ = this.response.asObservable()

  runResponse(data: ResponseModel) {
    this.response.next(data)
  }
}
