import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CookieService {
  saveToCookie(key: string, value: string, hours: number) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${key}=${value};${expires};path=/`;
  }

  deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }

  getCookie(key: string): string | null {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
      const cookie = cookiesArray[i].trim();
      if (cookie.startsWith(key + '=')) {
        return cookie.substring(key.length + 1);
      }
    }
    return null;
  }

  updateToken(token: string) {
    this.saveToCookie('token', token, 1);
  }

  getToken() {
    return this.getCookie('token');
  }
}
