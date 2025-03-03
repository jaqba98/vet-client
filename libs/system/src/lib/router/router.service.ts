import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RoutePageEnum, RouteSectionEnum } from '@vet-client/lib-store';

@Injectable({ providedIn: 'root' })
export class RouterService {
  constructor(private readonly router: Router) {}

  navigate(page: RoutePageEnum, section: RouteSectionEnum) {
    if (page === RoutePageEnum.empty) {
      return;
    }
    this.router.navigate([page]).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }
}
