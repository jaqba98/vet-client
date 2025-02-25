import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
