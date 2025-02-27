import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RouterEnum } from './router.enum';

@Injectable({ providedIn: 'root' })
export class RouterService {
  constructor(private readonly router: Router) {
  }

  redirect(route: RouterEnum, id = '') {
    this.router.navigate([route]).then(() => {
      setTimeout(() => {
        if (id !== '') {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    });
  }
}
