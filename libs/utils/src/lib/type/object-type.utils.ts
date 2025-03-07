import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ObjectTypeUtils {
  getKeys(obj: object): string[] {
    return Object.keys(obj)
  }
}
