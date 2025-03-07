import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class TextConvertUtils {
  static firstLetterUppercase(text: string) {
    const firstLetter = text.slice(0, 1).toUpperCase()
    const otherCharacters = text.slice(1).toLowerCase()
    return `${firstLetter}${otherCharacters}`
  }
}
