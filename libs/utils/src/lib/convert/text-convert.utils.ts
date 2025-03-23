import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class TextConvertUtils {
  static firstLetterUppercase(text: string) {
    const firstLetter = text.slice(0, 1).toUpperCase()
    const otherCharacters = text.slice(1).toLowerCase()
    return `${firstLetter}${otherCharacters}`
  }

  camelToPascalWithSpaces(input: string): string {
    if (!input) return ''
    const spaced = input.replace(/([a-z])([A-Z])/g, '$1 $2')
    return spaced
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
}
