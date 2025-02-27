import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RouterEnum } from './router.enum';

@Injectable({ providedIn: 'root' })
export class RouterService {
  constructor(private readonly router: Router) {
  }

  redirect(route: RouterEnum, id = '') {
    this.router.navigate([route]).then(() => {
      console.log(123);
      setTimeout(() => {
        console.log(321);
        if (id !== '') {
          console.log(222);
          const element = document.getElementById(id);
          console.log(element);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    });
  }
}
