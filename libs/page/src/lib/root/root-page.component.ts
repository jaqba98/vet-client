import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { NavStoreType, RouteStoreType } from '@vet-client/lib-store';
import { RouterService } from '@vet-client/lib-system';
import {
  FooterViewComponent,
  MainViewComponent,
  MobileNavMenuViewComponent,
  NavViewComponent
} from '@vet-client/lib-view';

@Component({
  selector: 'lib-root-page',
  imports: [
    RouterModule,
    FooterViewComponent,
    NavViewComponent,
    MainViewComponent,
    MobileNavMenuViewComponent,
  ],
  templateUrl: './root-page.component.html',
})
export class RootPageComponent implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private readonly routeStore: Store<RouteStoreType>,
    private readonly navStore: Store<NavStoreType>,
    private readonly router: RouterService
  ) {
    this.sub = new Subscription();
  }

  ngOnInit() {
    this.sub.add(
      this.routeStore
        .select('route')
        .subscribe((route) => this.router.navigate(route.page, route.section))
    );
    this.sub.add(
      this.navStore
        .select('nav')
        .subscribe((nav) => {
          document.body.style.overflow = nav.isOpen ? 'hidden' : 'auto';
        })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
