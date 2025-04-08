import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { Observable } from 'rxjs'

import { HttpPostAppService } from '@vet-client/lib-http'

@Injectable({ providedIn: 'root' })
export class GetAccountGuard implements CanActivate {
  constructor(private httpPost: HttpPostAppService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // return this.httpPost.getAccountPost()
    return true
  }
}
