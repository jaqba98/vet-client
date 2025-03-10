import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ObjectTypeUtils {
  getPropertyByDynamicKey<TObject>(obj: TObject, key: string) {
    return (obj as Record<string, string>)[key]
  }
}
