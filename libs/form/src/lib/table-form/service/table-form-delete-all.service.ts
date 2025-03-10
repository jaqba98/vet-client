import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class TableFormDeleteAllService {
  private action$ = new Subject<void>()

  invoke() {
    this.action$.next()
  }

  getAction() {
    return this.action$.asObservable()
  }
}
