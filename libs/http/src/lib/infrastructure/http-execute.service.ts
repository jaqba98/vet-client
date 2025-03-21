import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from '@vet-client/lib-env'
import { HttpType } from '../model/http.model'
import { MethodEnum } from '../enum/method.enum'

@Injectable({ providedIn: 'root' })
export class HttpExecuteService {
  constructor(private http: HttpClient) {
  }

  exec<TResponse>(type: HttpType): Observable<TResponse> {
    const apiUrl = `${environment.apiUrl}${type.type.endpoint}`
    switch (type.method) {
      case MethodEnum.post:
        return this.http.post<TResponse>(apiUrl, type.type.request)
      default:
        throw new Error(`Unsupported method ${type.method}`)
    }
  }
}
