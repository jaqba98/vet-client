import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class TableFormRefreshAllService {
  private action$ = new Subject<void>()

  invoke() {
    this.action$.next()
  }

  getAction() {
    return this.action$.asObservable()
  }
}
