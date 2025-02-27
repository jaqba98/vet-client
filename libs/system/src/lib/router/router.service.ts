import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RouterEnum } from './router.enum';

@Injectable({ providedIn: 'root' })
export class RouterService {
  constructor(private readonly router: Router) {
  }

  redirect(route: RouterEnum) {
    this.router.navigate([route])
  }
}
